<?php 
namespace Buxt\Action;

class BX_Compose { 
    public function compose($view) {
        $view->with([
            'bxterm' 	     => [$this, 'bxterm'],
            'bxtopterm' 	 => [$this, 'bxtopterm'],
            'bxbreadcrumb' 	 => [$this, 'bxbreadcrumb'],
            'bxnoimg' 		 => [$this, 'bxnoimg'],
            'bxmenu' 		 => [$this, 'bxmenu'],
            'bxwidget' 		 => [$this, 'bxwidget'],
        ]);
    }

    public function bxterm($taxonomy = 'category', $post_id = null){
        if ($taxonomy === 'tags') {
            $taxonomy = 'post_tag';
        }
        $post_id = $post_id ?: get_the_ID();
        $terms   = get_the_terms($post_id, $taxonomy);
        $result  = [];
        if (!empty($terms) && !is_wp_error($terms)) {
            $count = count($terms);
            foreach ($terms as $i => $term) {
                $meta  = (array) get_term_meta($term->term_id, 'custom', true);
                $image = !empty($meta['images']) ? esc_url($meta['images']) : get_template_directory_uri() . '/resources/images/noimg.webp';
                $views = !empty($meta['views']) ? esc_url($meta['views']) : 0;
                $post_count = (int)$term->count;
                $result[] = (object)[
                    'index'    => $i + 1,
                    'url'      => get_term_link($term),
                    'title'    => $term->name,
                    'slug'     => $term->slug,
                    'id'       => $term->term_id,
                    'taxonomy' => $term->taxonomy,
                    'meta'     => $meta,
                    'image'    => $image,
                    'comma'    => $i < $count - 1 ? ',' : '',
                    'count'    => (int) $post_count,
                    'views'    => $views,
                ];
            }
        }
        return $result;
    }
    
    public function bxtopterm($taxonomy = 'category', $limit = 5, $post_id = null) {
        if ($taxonomy === 'tags') {
            $taxonomy = 'post_tag';
        }
        $post_id = $post_id ?: get_the_ID();
        $terms   = get_the_terms($post_id, $taxonomy);
        $result  = [];

        if (!empty($terms) && !is_wp_error($terms)) {
            update_term_meta_cache( wp_list_pluck( $terms, 'term_id' ) );
            usort($terms, fn($a, $b) => (int)$b->count - (int)$a->count);
            $terms = array_slice($terms, 0, (int)$limit);
            $count = count($terms);

            foreach ($terms as $i => $term) {
                $image = get_term_meta($term->term_id, 'image', true) ?: get_template_directory_uri().'/resources/images/noimg.webp';
                $views = get_term_meta($term->term_id, 'views', true) ?: 0;
                $post_count = (int)$term->count;

                $result[] = (object)[
                    'index'    => $i + 1,
                    'url'      => get_term_link($term),
                    'title'    => $term->name,
                    'slug'     => $term->slug,
                    'id'       => $term->term_id,
                    'taxonomy' => $term->taxonomy,
                    'image'    => $image,
                    'comma'    => $i < $count - 1 ? ',' : '',
                    'count'    => $post_count,
                    'views'    => $views,
                ];
            }
        }
        return $result;
    }

    public function bxbreadcrumb($taxonomy = 'category', $index = 0, $post_id = null) {
        $post_id = $post_id ?: get_the_ID();
        $terms   = get_the_terms($post_id, $taxonomy);
        if (!empty($terms) && !is_wp_error($terms)) {
            $term = array_values($terms)[$index] ?? null;
            if ($term) {
                return (object)[
                    'url'   => get_term_link($term),
                    'title' => $term->name,
                ];
            }
        }
        return null;
    }

    public function bxnoimg() {
		$noimg = _buxt('default_images');
		$image_url = !empty($noimg) ? $noimg : get_template_directory_uri() . '/resources/images/noimg.webp';
		return $image_url;
	}

    public function bxmenu($title, $location, $listmenu) {
        $menu = wp_get_nav_menu_object($title);
        if (!$menu) {
            $menu_id = wp_create_nav_menu($title);
        } else {
            $menu_id = $menu->term_id;
        }
        foreach ($listmenu as $value) {
            $page_id = 0;
            if (!empty($value['page']) && !empty($value['title'])) {
                $page = get_page_by_title($value['title']);
                $page_id = $page ? $page->ID : 0;
            }
            $args = [
                'menu-item-title'   => $value['title'] ?? 'Buxt.Net',
                'menu-item-url'     => $value['url'] ?? home_url(),
                'menu-item-classes' => $value['classes'] ?? 'home-icon',
                'menu-item-status'  => 'publish',
            ];
            if ( $page_id ) {
                $args['menu-item-object']    = 'page';
                $args['menu-item-object-id'] = $page_id;
                $args['menu-item-type']      = 'post_type';
            } else {
                $args['menu-item-type'] = 'custom';
            }
            $item_id = wp_update_nav_menu_item( $menu_id, 0, $args );
            if ( ! empty( $value['icon'] ) ) {
                update_post_meta($item_id, 'menu_icon', [ 'icon' => $value['icon'] ]);
            }
            if (!empty($value['submenu'])) {
                $taxonomy = $value['submenu'];
                $limit    = $value['sublimit'] ?? false;
                $args = ['hide_empty' => false];
                if ($limit) $args['number'] = (int) $limit;
                $terms = get_terms(['taxonomy' => $taxonomy] + $args);
                if (!is_wp_error($terms) && !empty($terms)) {
                    foreach ($terms as $term) {
                        wp_update_nav_menu_item($menu_id, 0, [
                            'menu-item-title'     => $term->name,
                            'menu-item-object'    => $taxonomy,
                            'menu-item-object-id' => $term->term_id,
                            'menu-item-parent-id' => $item_id,
                            'menu-item-type'      => 'taxonomy',
                            'menu-item-status'    => 'publish',
                        ]);
                    }
                }
            }
        }
        $locations = get_theme_mod('nav_menu_locations');
        $locations[$location] = $menu_id;
        set_theme_mod('nav_menu_locations', $locations);
        return $menu_id;
    }

    public function bxwidget($sidebar_id, $widget_id, $widget_type = 'videos_block', $args = array()) {
        global $sidebars_widgets;
        $sidebars_widgets = get_option('sidebars_widgets', array());
        if (!isset($sidebars_widgets[$sidebar_id])) {
            $sidebars_widgets[$sidebar_id] = array();
        }
        if (!in_array($widget_type . "-" . $widget_id, $sidebars_widgets[$sidebar_id])) {
            $sidebars_widgets[$sidebar_id][] = $widget_type . "-" . $widget_id;
        }
        $ops = get_option('widget_' . $widget_type, array());    
        $ops[$widget_id] = $args;    
        $ops["_multiwidget"] = 1;    
        update_option('widget_' . $widget_type, $ops);
        update_option('sidebars_widgets', $sidebars_widgets);    
    }
}
