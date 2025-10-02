<?php

namespace Buxt\Directives;

use Illuminate\Support\Str;

class WordPress extends Directives {

    public function directives(): array {
        return [
			/*
            |--------------------------------------------------------------------------------------------------
            | @bxhome / @bxname / @bxlang / @bxads / @bxpagi / @bxnavi / @bxcheck / @bxmeta / @bxlikes /
            | @bxdislikes / @bxposter / @percentage / @bxposter / @bxthree / @bxcontent / @bxfisrtlast / 
            | @bxupviews / @bxviews / @bxavatar / @bxavatar / @bxuser / @bxislogin / @bxpage / @endbxp / @bxlogo 
            | @bxralated / @bxschedule / @bxlich / @bxcomments / @bxccomment / @bxtimeago /@bxsearch / @bxlogout
            |--------------------------------------------------------------------------------------------------
            */
			'bxhome' => function ($expression = null) {
                if (!empty($expression)) {
                    $expression    = $this->parse($expression);
                    $slug       = !empty($expression->get(0)) ? bx_parse_value($expression->get(0)) : '';
                    return "<?php echo esc_url( home_url({$slug}) ); ?>";
                }
                return "<?php echo esc_url( home_url('/') ); ?>";
            },
			'bxname' => function () {
				return "<?php echo get_bloginfo('name') ?: ''; ?>";
			},
            'bxlogo' => function ($expression = null) {
                if (!empty($expression)) {
                    $expression    = $this->parse($expression);
                    $default       = !empty($expression->get(0)) ? bx_parse_value($expression->get(0)) : '';
                    return "<?php echo _buxt('site_logo', {$default}); ?>";
                }
                return "<?php echo _buxt('site_logo', get_template_directory_uri() . '/resources/images/logo.png'); ?>";
            },
			'bxlang' => function ($expression) {
                if (!empty($expression)) {
                    $expression     = $this->parse($expression);
                    $textCode       = !empty($expression->get(0)) ? bx_parse_value($expression->get(0)) : '';
                    $langCode       = !empty($expression->get(1)) ? bx_parse_value($expression->get(1)) : "'" . _BXLANG . "'";
                    return "<?php echo __({$textCode}, {$langCode}) ?: ''; ?>";
                }
                return "''";
            },
			'bxlg' => function ($expression) {
                if (!empty($expression)) {
                    $expression     = $this->parse($expression);
                    $textCode       = !empty($expression->get(0)) ? bx_parse_value($expression->get(0)) : '';
                    $langCode       = !empty($expression->get(1)) ? bx_parse_value($expression->get(1)) : "'" . _BXLANG . "'";
                    return "<?php echo __({$textCode}, {$langCode}) ?: ''; ?>";
                }
                return "''";
            },
			'bxthumb' => function ($expression) {
                if (empty($expression)) {
                    return "<?php echo bxthumbnail('thumbnail', get_the_ID()); ?>";
                }
                $expression     = $this->parse($expression);
                $sizeCode       = !empty($expression->get(0)) ? bx_parse_value($expression->get(0)) : '';
                $postIdCode     = !empty($expression->get(1)) ? bx_parse_value($expression->get(1)) : "get_the_ID()";
                return "<?php echo bxthumbnail({$sizeCode}, {$postIdCode}); ?>";
            },
			'bxthumbs' => function ($expression) {
                if (empty($expression)) {
                    return "<?php echo bxthumbnail('thumbnail', get_the_ID()); ?>";
                }
                $expression     = $this->parse($expression);
                $sizeCode       = !empty($expression->get(0)) ? bx_parse_value($expression->get(0)) : '';
                $postIdCode     = !empty($expression->get(1)) ? bx_parse_value($expression->get(1)) : "get_the_ID()";
                return "<?php echo bxthumbnail({$sizeCode}, {$postIdCode}); ?>";
            },
			'bxads' => function ($expression) {
                if (!empty($expression)) {
                    $expression  = $this->parse($expression);
                    $bxads       = !empty($expression->get(0)) ? bx_parse_value($expression->get(0)) : '';
                    return "<?php echo bxads({$bxads}); ?>";
                }
                return "";
            },
			'bxpagi' => function ($expression) {
				$expression = trim($expression);
				if (!empty($expression)) {
					return "<?php 
						use function Roots\\view; 
						Buxt\Pagination\Pagi::setQuery($expression);
						\$pagi = Buxt\Pagination\Pagi::build();
						echo view('layouts.pagi')->with('pagi', \$pagi)->render(); ?>
					";
				}
				return "<?php 
					use function Roots\\view; 
					\$pagi = Buxt\Pagination\Pagi::build();
					echo view('layouts.pagi')->with('pagi', \$pagi)->render(); ?>
				";
			},
            'bxnavi' => function ($expression) {
                $menuNameCode = "'header_menu'";
                $viewNameCode = "'header'";
                
                if (!empty($expression)) {
                    $parsed = $this->parse($expression);
                    if ($parsed->count() >= 1) {
                        $menuName = trim($parsed->get(0));
                        $menuNameCode = preg_match('/^(["\']).*\1$/', $menuName) ? $menuName : "'" . addslashes($menuName) . "'";
                        
                        if ($parsed->count() >= 2) {
                            $viewName = trim($parsed->get(1));
                            $viewNameCode = preg_match('/^(["\']).*\1$/', $viewName) ? $viewName : "'" . addslashes($viewName) . "'";
                        }
                    }
                }

                return "<?php 
                    ob_start();
                    \$__menu = Buxt\\Navigation\\Navi::make()->build({$menuNameCode});
                    echo view('navi.' . {$viewNameCode}, ['menu' => \$__menu])->render();
                    echo ob_get_clean();
                ?>";
            },
            'bxcheck' => function ($expression) {
                if (!empty($expression)) {
                    $expression  = $this->parse($expression);
                    $meta        = !empty($expression->get(0)) ? bx_parse_value($expression->get(0)) : '';
                    return "<?php if (bxinfo({$meta})): ?>";
                }
                return "<?php if (false): ?>";
            },
            'bxecheck' => function () {
                return "<?php endif; ?>";
            },
            'bxmeta' => function ($expression) {
                if (!empty($expression)) {
                    $expression  = $this->parse($expression);
                    $metaKey     = !empty($expression->get(0)) ? bx_parse_value($expression->get(0)) : '';
                    $postIdCode  = !empty($expression->get(1)) ? bx_parse_value($expression->get(1)) : 'get_the_ID()';
                    return "<?php 
                        \$__meta = get_post_meta({$postIdCode}, _BXMETA, true);
                        echo isset(\$__meta[{$metaKey}]) ? \$__meta[{$metaKey}] : '';
                    ?>";
                }
                return "<?php echo ''; ?>";
            },
            'bxlikes' => function ($expression) {
                $expression = $this->parse($expression);
                $postId  = !empty($expression->get(0)) ? bx_parse_value($expression->get(0)) : 'get_the_ID()';
                return "<?php 
                    \$likes = (int) get_post_meta({$postId}, _BXLIKES, true);
                    echo number_format_short(\$likes);
                ?>";
            },
            'bxdislikes' => function ($expression) {
                $expression = $this->parse($expression);
                $postId  = !empty($expression->get(0)) ? bx_parse_value($expression->get(0)) : 'get_the_ID()';
                return "<?php 
                    \$likes = (int) get_post_meta({$postId}, _BXDISLIKES, true);
                    echo number_format_short(\$likes);
                ?>";
            },
            'percentage' => function ($expression) {
                $expression = $this->parse($expression);
                $postId  = !empty($expression->get(0)) ? bx_parse_value($expression->get(0)) : 'get_the_ID()';
                return "<?php
                    \$likes    = (int) get_post_meta({$postId}, _BXLIKES, true);
                    \$dislikes = (int) get_post_meta({$postId}, _BXDISLIKES, true);
                    \$total    = \$likes + \$dislikes;
                    echo \$total > 0 ? round((\$likes / \$total) * 100, 2) . '%' : '0%';
                ?>";
            },
            'phantram' => function ($expression) {
                $expression = $this->parse($expression);
                $postId  = !empty($expression->get(0)) ? bx_parse_value($expression->get(0)) : 'get_the_ID()';
                return "<?php
                    \$likes    = (int) get_post_meta({$postId}, _BXLIKES, true);
                    \$dislikes = (int) get_post_meta({$postId}, _BXDISLIKES, true);
                    \$total    = \$likes + \$dislikes;
                    echo \$total > 0 ? round((\$likes / \$total) * 100, 2) . '%' : '0%';
                ?>";
            },
            'bxposter' => function ($expression) {
                $expression = $this->parse($expression);
                $postId  = !empty($expression->get(1)) ? bx_parse_value($expression->get(1)) : 'get_the_ID()';
                return "<?php if (function_exists('bxposter')) echo bxposter({$postId}); ?>";
            },
            'bxterm' => function ($expression) {
                $expression = $this->parse($expression);
                $taxonomy = !empty($expression->get(0)) ? bx_parse_value($expression->get(0)) : "'category'";
                $postId = !empty($expression->get(1)) ? bx_parse_value($expression->get(1)) : 'get_the_ID()';
                $count = !empty($expression->get(2)) ? bx_parse_value($expression->get(2)) : "";
                $code  = "<?php \$__bxterm_results = bxterm({$taxonomy}, {$postId}, {$count}); ?>";
                $code .= "<?php if (is_array(\$__bxterm_results) && count(\$__bxterm_results) > 0) : ?>";
                $code .= "<?php foreach (\$__bxterm_results as \$term) : ?>";
                return $code;
            },
            'bxeterm' => function () {
                return "<?php endforeach; endif; ?>";
            },

            'bxthree' => function ($expression) {
                $expression = $this->parse($expression);
                $count   = !empty($expression->get(0)) ? bx_parse_value($expression->get(0)) : 3;
                $postId  = !empty($expression->get(1)) ? bx_parse_value($expression->get(1)) : 'get_the_ID()';
                $code = "<?php \$bxthree_results = bxthree({$count}, {$postId}); ?>";
                $code .= "<?php if (is_array(\$bxthree_results) && count(\$bxthree_results) > 0) : ?>";
                $code .= "<?php foreach (\$bxthree_results as \$three) : ?>";
                return $code;
            },
            'bxethree' => function () {
                return "<?php endforeach; endif; ?>";
            },
            'bxseason' => function ($expression = null) {
                $expression = $this->parse($expression);
                $postid     = !empty($expression->get(0)) ? bx_parse_value($expression->get(0)) : 'get_the_ID()';
                $max_items  = !empty($expression->get(1)) ? bx_parse_value($expression->get(1)) : 4;
                return "<?php
                    \$related_posts = bxseason({$postid}, {$max_items});
                    if (is_array(\$related_posts) && count(\$related_posts) > 0) :
                        foreach (\$related_posts as \$item) :
                ?>";
            },
            'bxeseason' => function () {
                return "<?php
                        endforeach;
                    endif;
                ?>";
            },
            'bxtimeago' => function ($expression = null) {
                $expression = $this->parse($expression);
                $timeCode = !empty($expression->get(0)) ? bx_parse_value($expression->get(0)) : 'current_time("timestamp")';
                return "<?php echo bxtimeago({$timeCode}); ?>";
            },
            'bxcontent' => function ($expression) {
                if (!empty($expression)) {
                    $expression = trim($expression, '() ');
                    $length = (int) $expression;
                    return "<?php 
                        global \$post;
                        if (isset(\$post) && !empty(\$post->post_content)) {
                            \$text = strip_tags(\$post->post_content);
                            \$text = wp_kses_post(\$text); // lọc an toàn
                            echo mb_strlen(\$text, 'UTF-8') > {$length} 
                                ? mb_substr(\$text, 0, {$length}, 'UTF-8') . '...' 
                                : \$text;
                        } else {
                            echo '';
                        }
                    ?>";
                }
                return "<?php if (have_posts()) the_content(); ?>";
            },
            'bxfllink' => function ($expression) {
                $expression = $this->parse($expression);
                $postIdCode = !empty($expression->get(0)) ? bx_parse_value($expression->get(0)) : 'get_the_ID()';
                return "<?php echo bxfllink({$postIdCode}); ?>";
            },
            'bxlink' => function ($expression) {
                $expression = $this->parse($expression);
                $postIdCode = !empty($expression->get(0)) ? bx_parse_value($expression->get(0)) : 'get_the_ID()';
                return "<?php echo bxlink({$postIdCode}); ?>";
            },
            'bxaction' => function ($expression) {
                $expression = $this->parse($expression);
                $bxaction = !empty($expression->get(0)) ? bx_parse_value($expression->get(0)) : 'info';
                return "<?php if (get_query_var('bxaction') == {$bxaction}): ?>";
            },
            'endbxaction' => function () {
                return "<?php endif; ?>";
            },
            'bxfisrtlast' => function ($expression) {
                $expression = $this->parse($expression);
                $postIdCode = !empty($expression->get(0)) ? bx_parse_value($expression->get(0)) : 'get_the_ID()';
                return "<?php echo bxinc_fllink({$postIdCode}); ?>";
            },
			'bxupviews' => function ($expression) {
                $expression = $this->parse($expression);
                $postIdCode = !empty($expression->get(0)) ? bx_parse_value($expression->get(0)) : 'get_the_ID()';
                return "<?php if(is_singular() && function_exists('bxupviews')): bxupviews({$postIdCode}); endif; ?>";
            },
            'bxviews' => function ($expression) {
                $expression = $this->parse($expression);
                $periodCode = !empty($expression->get(0)) ? bx_parse_value($expression->get(0)) : "'day'";
                $post_id    = !empty($expression->get(1)) ? bx_parse_value($expression->get(1)) : "get_the_ID()";
                return "<?php if (function_exists('bxviews')) echo bxviews({$periodCode}, {$post_id}); ?>";
            },
            'bxavatar' => function ($expression) {
                return "<?php
                    \$current_user = wp_get_current_user();
                    \$avatar_id = get_user_meta(get_current_user_id(), 'avatar_id', true);
                    \$avatar_url = \$avatar_id ? wp_get_attachment_url(\$avatar_id) : _buxt('default_avatar');
                    echo esc_url(\$avatar_url ?: '');
                ?>";
            },
            'bxuser' => function ($expression = null) {
                $expression = $this->parse($expression);
                $fieldCode = !empty($expression->get(0)) ? bx_parse_value($expression->get(0)) : "'name'";
                return "<?php
                    \$field = {$fieldCode};
                    \$current_user = wp_get_current_user();
                    \$value = '';
                    if (\$current_user->ID) {
                         if (\$field === 'avatar') {
                            \$user_avatar = get_user_meta(\$current_user->ID, 'user_avatar', true);
                            if (\$user_avatar) {
                                echo esc_url(\$user_avatar);
                            } else {
                                echo esc_url(get_avatar_url(\$current_user->ID, ['size' => 96]));
                            }
                        } else {
                            \$wp_user_fields = ['login', 'email', 'nicename', 'url', 'registered', 'display_name'];
                            \$field_map = ['name' => 'display_name'];
                            \$lookup_field = isset(\$field_map[\$field]) ? \$field_map[\$field] : \$field;
                            if (in_array(\$lookup_field, \$wp_user_fields)) {
                                \$wp_field = 'user_' . \$lookup_field;
                                \$value = \$current_user->\$wp_field ?? '';
                                if (\$field === 'name' && empty(\$value)) {
                                    \$value = \$current_user->user_nicename ?? '';
                                }

                                if (\$lookup_field === 'registered' && \$value) {
                                    \$value = date('F j, Y', strtotime(\$value));
                                }
                            } else {
                                \$meta_value = get_user_meta(\$current_user->ID, \$field, true);
                                \$value = \$meta_value ?: '';
                            }

                            echo esc_attr(\$value);
                        }
                    }
                ?>";
            },
            'bxislogin' => function ($expression = null) {
                $redirectLoggedIn = false;
                if (!empty($expression)) {
                    $expression = trim($expression, '() ');
                    if (strtolower($expression) === 'false') {
                        $redirectLoggedIn = true;
                    }
                }
                return $redirectLoggedIn ? "<?php if (is_user_logged_in()) { wp_safe_redirect(home_url()); exit; } ?>"
                    : "<?php if (!is_user_logged_in()) { wp_safe_redirect(home_url()); exit; } ?>";
            },
            'bxlogout' => function ($expression) {
                return "<?php echo bxlogout(); ?>";
            },
            'bxpage' => function ($expression) {
                $expression         = $this->parse($expression);
                $type               = !empty($expression->get(0)) ? bx_parse_value($expression->get(0)) : "'latest'";
                $posts_per_page     = !empty($expression->get(1)) ? bx_parse_value($expression->get(1)) : 10;
                $output = "<?php 
                global \$wpdb;
                \$paged = get_query_var('paged') ?? get_query_var('page') ?? 1;
                \$args = array(
                    'post_status' => 'publish',
                    'paged' => \$paged,
                    'posts_per_page' => {$posts_per_page},
                );
                \$bxpage_type = {$type}; 

                switch (\$bxpage_type) {
                    case 'most':
                    case 'popular':
                    case 'trending':
                        \$args['meta_query'] = [['key' => 'views_all']];
                        \$args['orderby'] = 'meta_value_num';
                        \$args['order'] = 'DESC';
                    break;
                    case 'history':
                        \$user_id = get_current_user_id();
                        \$history = get_user_meta(\$user_id, 'history', true);
                        \$history = \$history ? json_decode(\$history, true) : [];
                        if (!empty(\$history)) {
                            \$post_ids = array_keys(\$history);
                            \$args['orderby']  = 'post__in';
                            \$args['post__in'] = \$post_ids;
                        } else {
                            \$args['post__in'] = [0];
                        }
                    break;
                    case 'favorite':
                    case 'yeu-thich':
                        \$user_id = get_current_user_id();
                        \$favorite = get_user_meta(\$user_id, 'favorite', true);
                        \$favorite = \$favorite ? json_decode(\$favorite, true) : [];
                        if (!empty(\$favorite)) {
                            \$post_ids = array_keys(\$favorite);
                            \$args['orderby']  = 'post__in';
                            \$args['post__in'] = \$post_ids;
                        } else {
                            \$args['post__in'] = [0];
                        }
                    break;
                    case 'az':
                    case 'azlist':
                    case 'az-list':
                        \$args['post_type'] = 'post';
                        \$args['ignore_sticky_posts'] = true;
                        \$args['substring_where'] = sanitize_text_field(get_query_var('letter'));
                    break;
                    case 'bxday':
                    case 'day':
                        \$args['meta_query'] = [['key' => 'views_day']];
                        \$args['orderby'] = 'meta_value_num';
                        \$args['order']   = 'DESC';
                    break;
                    case 'bxweek':
                    case 'week':
                        \$args['meta_query'] = [['key' => 'views_week']];
                        \$args['orderby'] = 'meta_value_num';
                        \$args['order']   = 'DESC';
                    break;
                    case 'bxmonth':
                    case 'month':
                        \$args['meta_query'] = [['key' => 'views_month']];
                        \$args['orderby'] = 'meta_value_num';
                        \$args['order']   = 'DESC';
                    break;
                    case 'trailer':
                        \$args['post_type'] = 'post';
                        \$args['tax_query'] = [[
                            'taxonomy' => 'status',
                            'field'    => 'slug',
                            'terms'    => ['trailer'],
                            'operator' => 'IN',
                        ]];
                    break;
                    case 'bxupdate':
                    case 'update':
                    case 'lastupdate':
                        \$args['orderby'] = 'modified';
                        break;
                    case 'bxsearch':
                        \$args['s'] = get_search_query(false);
                        break;
                    case 'bxnews':
                        \$args['post_type'] = 'news';
                        \$args['orderby'] = match (_buxt('sort_post_type')) {
                            'latest_posts','old_posts' => 'date',
                            default => 'modified',
                        };
                        break;
                    case 'bxvideo':
                        \$args['post_type'] = 'video';
                        \$args['orderby'] = match (_buxt('sort_post_type')) {
                            'latest_posts','old_posts' => 'date',
                            default => 'modified',
                        };
                    break;
                    case 'completed':
                        \$args['post_type'] = 'post';
                        \$args['tax_query'] = [[
                            'taxonomy' => 'status',
                            'field'    => 'slug',
                            'terms'    => ['completed'],
                            'operator' => 'IN',
                        ]];
                    break;
                    case 'ongoing':
                        \$args['post_type'] = 'post';
                        \$args['tax_query'] = [[
                            'taxonomy' => 'status',
                            'field'    => 'slug',
                            'terms'    => ['ongoing'],
                            'operator' => 'IN',
                        ]];
                    break;
                    case 'tvshows':
                    case 'tv_shows':
                    case 'tv-shows':
                        \$args['post_type'] = 'post';
                        \$args['tax_query'] = [[
                            'taxonomy' => 'bxtype',
                            'field'    => 'slug',
                            'terms'    => ['tv_shows', 'tvshows'],
                            'operator' => 'IN',
                        ]];
                        break;
                    case 'theater':
                        \$args['post_type'] = 'post';
                        \$args['tax_query'] = [[
                            'taxonomy' => 'bxtype',
                            'field'    => 'slug',
                            'terms'    => ['theater', 'chieurap', 'chieu-rap'],
                            'operator' => 'IN',
                        ]];
                    break;
                    case 'tvseries':
                    case 'tv_series':
                    case 'phim-bo':
                        \$args['post_type'] = 'post';
                        \$args['tax_query'] = [[
                            'taxonomy' => 'bxtype',
                            'field'    => 'slug',
                            'terms'    => ['series', 'phim-bo', 'tv_series'],
                            'operator' => 'IN',
                        ]];
                    break;
                    case 'movies':
                    case 'single':
                    case 'phim-le':
                        \$args['post_type'] = 'post';
                        \$args['tax_query'] = [[
                            'taxonomy' => 'bxtype',
                            'field'    => 'slug',
                            'terms'    => ['movies', 'single', 'single_movies', 'phim-le'],
                            'operator' => 'IN',
                        ]];
                    break;
                    case 'rand':
                        \$args['post_type'] = 'post';
                        \$args['orderby']   = 'rand';
                    break;
                    case 'manga':
                        \$args['post_type'] = 'post';
                        \$args['tax_query'] = [[
                            'taxonomy' => 'bxtype',
                            'field'    => 'slug',
                            'terms'    => ['manga'],
                            'operator' => 'IN',
                        ]];
                    break;
                    case 'manhua':
                        \$args['post_type'] = 'post';
                        \$args['tax_query'] = [[
                            'taxonomy' => 'bxtype',
                            'field'    => 'slug',
                            'terms'    => ['manhua'],
                            'operator' => 'IN',
                        ]];
                    break;
                    case 'manhwa':
                        \$args['post_type'] = 'post';
                        \$args['tax_query'] = [[
                            'taxonomy' => 'bxtype',
                            'field'    => 'slug',
                            'terms'    => ['manhwa'],
                            'operator' => 'IN',
                        ]];
                    break;
                    case 'doujinshi':
                        \$args['post_type'] = 'post';
                        \$args['tax_query'] = [[
                            'taxonomy' => 'bxtype',
                            'field'    => 'slug',
                            'terms'    => ['doujinshi'],
                            'operator' => 'IN',
                        ]];
                    break;
                    case 'oneshot':
                        \$args['post_type'] = 'post';
                        \$args['tax_query'] = [[
                            'taxonomy' => 'bxtype',
                            'field'    => 'slug',
                            'terms'    => ['oneshot'],
                            'operator' => 'IN',
                        ]];
                    break;
                    case 'webtoon':
                        \$args['post_type'] = 'post';
                        \$args['tax_query'] = [[
                            'taxonomy' => 'bxtype',
                            'field'    => 'slug',
                            'terms'    => ['webtoon'],
                            'operator' => 'IN',
                        ]];
                    break;
                    case 'short':
                        \$args['post_type'] = 'post';
                        \$args['tax_query'] = [[
                            'taxonomy' => 'bxtype',
                            'field'    => 'slug',
                            'terms'    => ['short'],
                            'operator' => 'IN',
                        ]];
                    break;
                    case 'jav':
                        \$args['post_type'] = 'post';
                        \$args['tax_query'] = [[
                            'taxonomy' => 'bxtype',
                            'field'    => 'slug',
                            'terms'    => ['jav'],
                            'operator' => 'IN',
                        ]];
                    break;
                    case 'videos':
                        \$args['post_type'] = 'post';
                        \$args['tax_query'] = [[
                            'taxonomy' => 'bxtype',
                            'field'    => 'slug',
                            'terms'    => ['videos'],
                            'operator' => 'IN',
                        ]];
                    break;
                    case 'blog':
                        \$args['post_type'] = 'post';
                        \$args['tax_query'] = [[
                            'taxonomy' => 'bxtype',
                            'field'    => 'slug',
                            'terms'    => ['blog'],
                            'operator' => 'IN',
                        ]];
                    break;

                    case 'latest':
                    default:
                        \$args['post_type'] = 'post';
                    break;
                }

                \$wp_query = new \\WP_Query(\$args);
                if (\$wp_query->have_posts()) :
                    while (\$wp_query->have_posts()) : \$wp_query->the_post();
                ?>";
                return $output;
            },
            'endbxp' => function () {
				return "<?php 
					endwhile; 
				endif; 
				wp_reset_postdata(); 
				?>";
			},
            'bxepage' => function () {
                return "<?php 
                        endwhile;
                    endif;
                    wp_reset_postdata();
                ?>";
            },
            'bxsort' => function ($expression) {
                $expression = $this->parse($expression);
                $filters        = !empty($expression->get(0)) ? bx_parse_value($expression->get(0)) : "[]";
                $posts_per_page = !empty($expression->get(1)) ? bx_parse_value($expression->get(1)) : 12;
                $output = "<?php
                    global \$wpdb;
                    \$paged = get_query_var('paged') ?? get_query_var('page') ?? 1;
                    \$args = [
                        'post_type'      => 'post',
                        'posts_per_page' => {$posts_per_page},
                        'post_status'    => 'publish',
                        'paged'          => \$paged,
                    ];
                    \$tax_query = [];
                    if (!empty({$filters})) {
                        \$filters = is_array({$filters}) ? {$filters} : (array){$filters};
                        foreach ({$filters} as \$taxonomy => \$terms) {
                            if (in_array(\$taxonomy, ['sort','search'])) continue;
                            if (!empty(\$terms)) {
                                \$termsArray = is_array(\$terms) ? \$terms : [\$terms];
                                \$first = reset(\$termsArray);
                                \$field = is_numeric(\$first) ? 'term_id' : 'slug';
                                \$tax_query[] = [
                                    'taxonomy' => \$taxonomy,
                                    'field'    => \$field,
                                    'terms'    => \$termsArray,
                                    'operator' => 'IN'
                                ];
                            }
                        }
                    }
                    if (!empty(\$tax_query)) {
                        \$args['tax_query'] = ['relation' => 'AND', ...\$tax_query];
                    }
                    if (!empty({$filters}['search'])) {
                        \$args['s'] = {$filters}['search'];
                    }
                    if (!empty({$filters}['sort'])) {
                        switch ({$filters}['sort']) {
                            case 'recently-released':
                            case 'recently':
                            case 'gan-day':
                                \$args['orderby'] = 'modified';
                                \$args['order']   = 'DESC';
                                break;
                            case 'oldest-releases':
                            case 'oldest':
                            case 'cu-nhat':
                                \$args['orderby'] = 'modified';
                                \$args['order']   = 'ASC';
                                break;
                            case 'view':
                            case 'views':
                                \$args['meta_key'] = 'views_all';
                                \$args['orderby']  = 'meta_value_num';
                                \$args['order']    = 'DESC';
                                break;
                            case 'view_day':
                            case 'day':
                            case 'ngay':
                                \$args['meta_key'] = 'view_day';
                                \$args['orderby']  = 'meta_value_num';
                                \$args['order']    = 'DESC';
                                break;
                            case 'view_week':
                            case 'week':
                            case 'tuan':
                                \$args['meta_key'] = 'view_week';
                                \$args['orderby']  = 'meta_value_num';
                                \$args['order']    = 'DESC';
                                break;
                            case 'view_month':
                            case 'month':
                            case 'thang':
                                \$args['meta_key'] = 'view_month';
                                \$args['orderby']  = 'meta_value_num';
                                \$args['order']    = 'DESC';
                                break;
                            case 'favorite':
                            case 'yeu-thich':
                                \$args['meta_key'] = 'favorite';
                                \$args['orderby']  = 'meta_value_num';
                                \$args['order']    = 'DESC';
                                break;
                            case 'favorite':
                            case 'yeu-thich':
                                \$args['meta_key'] = 'favorite';
                                \$args['orderby']  = 'meta_value_num';
                                \$args['order']    = 'DESC';
                                break;
                            case 'likes':
                            case 'like':
                            case 'thich':
                                \$args['meta_key'] = 'likes';
                                \$args['orderby']  = 'meta_value_num';
                                \$args['order']    = 'DESC';
                                break;
                            case 'dislikes':
                            case 'dislike':
                                \$args['meta_key'] = 'dislikes';
                                \$args['orderby']  = 'meta_value_num';
                                \$args['order']    = 'DESC';
                                break;
                            case 'az':
                            case 'a-z':
                                \$args['orderby'] = 'title';
                                \$args['order']   = 'ASC';
                                break;
                            case 'za':
                            case 'z-a':
                                \$args['orderby'] = 'title';
                                \$args['order']   = 'DESC';
                                break;
                        }
                    }

                    \$wp_query = new \\WP_Query(\$args);
                    if (\$wp_query->have_posts()):
                        while (\$wp_query->have_posts()): \$wp_query->the_post();
                ?>";
                return $output;
            },
            'endbxsort' => function () {
                return "<?php endwhile; endif; wp_reset_postdata(); ?>";
            },
            'bxralated' => function ($expression) {
                $expression = $this->parse($expression);
                $type       = !empty($expression->get(0)) ? bx_parse_value($expression->get(0)) : "'tag'";
                $postnum    = !empty($expression->get(1)) ? bx_parse_value($expression->get(1)) : 10;

                return "<?php 
                    \$args = array(
                        'post_status'     => 'publish',
                        'posts_per_page'  => {$postnum},
                    );
                    \$meta = get_post_meta(get_the_ID(), _BXMETA, true);
                    \$category_ids = array_map(fn(\$category) => \$category->term_id, get_the_category(get_the_ID()) ?: []);
                    \$tags = wp_get_post_terms(get_the_ID(), 'post_tag', ['fields' => 'ids']);
                    \$args['post_type'] = 'post';
                    \$args['post__not_in'] = [get_the_ID()];
                    \$args['ignore_sticky_posts'] = true;
                    \$args['orderby'] = 'rand';
                    if ( !empty(\$meta['type']) ) {
                        \$args['tax_query'][] = array(
                            'taxonomy' => 'bxtype',
                            'field'    => 'slug',
                            'terms'    => \$meta['type'],
                            'operator' => 'IN',
                        );
                    }
                    if ({$type} == 'tag' && \$tags) {
                        \$args['tag__in'] = \$tags;
                    } else {
                        \$args['category__in'] = \$category_ids;
                    }
                    \$wp_query = new \\WP_Query(\$args);
                    if (\$wp_query->have_posts()) :
                        while (\$wp_query->have_posts()) : \$wp_query->the_post();
                ?>";
            },
            'bxeralated' => function () {
                return "<?php 
                        endwhile;
                    endif;
                    wp_reset_postdata();
                ?>";
            },
            'bxsearch' => function ($expression) {
                $expression         = $this->parse($expression);
                $keywordCode        = !empty($expression->get(0)) ? bx_parse_value($expression->get(0)) : "get_search_query()";
                $posts_per_page     = !empty($expression->get(1)) ? bx_parse_value($expression->get(1)) : "get_option('posts_per_page')";
                $code = "<?php 
                    \$paged = get_query_var('paged') ?? get_query_var('page') ?? 1;
                    \$args = array(
                        's'              => {$keywordCode},
                        'post_type'      => 'post',
                        'post_status'    => 'publish',
                        'paged'          => \$paged,
                        'posts_per_page' => {$posts_per_page},
                    );
                    \$wp_query = new \\WP_Query(\$args);
                    if (\$wp_query->have_posts()) :
                        while (\$wp_query->have_posts()) : \$wp_query->the_post();
                ?>";

                return $code;
            },
            'bxesearch' => function () {
                return "<?php 
                        endwhile;
                    endif;
                    wp_reset_postdata();
                ?>";
            },
            'bxstatus' => function ($expression) {
                return "<?php echo bxinfo('status'); ?>";
            },
            'bxschedule' => function ($expression) {
                $postIdCode     = !empty($expression) ? bx_parse_value($expression) : "get_the_ID()";
                $daysMap = [
                    'monday'    => bxrlang('Monday'),
                    'tuesday'   => bxrlang('Tuesday'),
                    'wednesday' => bxrlang('Wednesday'),
                    'thursday'  => bxrlang('Thursday'),
                    'friday'    => bxrlang('Friday'),
                    'saturday'  => bxrlang('Saturday'),
                    'sunday'    => bxrlang('Sunday'),
                ];
                $daysMapCode = var_export($daysMap, true);

                return "<?php
                    \$__post_id = {$postIdCode};
                    \$__terms = wp_get_post_terms(\$__post_id, 'schedule', ['fields' => 'slugs']);
                    if (!is_array(\$__terms)) \$__terms = [];
                    \$__map = {$daysMapCode};
                    \$__labels = array_map(function(\$k) use (\$__map) {
                        return \$__map[\$k] ?? ucfirst(\$k);
                    }, \$__terms);
                    echo !empty(\$__labels) ? implode(', ', \$__labels) : '';
                ?>";
            },
            'bxquality' => function ($expression) {
                return "<?php echo bxinfo('quality'); ?>";
            },
			'bxruntime' => function ($expression) {
                return "<?php echo bxinfo('runtime'); ?>";
            },
			'bxepisodes' => function ($expression) {
                return "<?php echo bxinfo('episodes'); ?>";
            },
			'bxtotal' => function ($expression) {
                return "<?php echo bxinfo('total_episodes'); ?>";
            },
			'bxtype' => function ($expression) {
                $postIdCode     = !empty($expression) ? bx_parse_value($expression) : "get_the_ID()";
                return "<?php
                    \$post_id = {$postIdCode} ?? get_the_ID();
                    \$terms = wp_get_post_terms(\$post_id, 'bxtype', ['fields' => 'names']);
                    echo !is_wp_error(\$terms) && !empty(\$terms) ? implode(', ', \$terms) : '';
                ?>";
            },
            'bxcode' => function ($expression) {
                return "<?php echo bxinfo('code'); ?>";
            },
            'bxpreview' => function ($expression) {
                return "<?php echo bxinfo('preview'); ?>";
            },
            'bxalttitle' => function ($expression) {
                return "<?php echo bxinfo('alt_title'); ?>";
            },	
            'bxalt_title' => function ($expression) {
                return "<?php echo bxinfo('alt_title'); ?>";
            },	
            'bxorgtitle' => function ($expression) {
                return "<?php echo bxinfo('alt_title'); ?>";
            },	
            'bxtmdb' => function ($expression) {
                return "<?php echo bxinfo('tmdb_id'); ?>";
            },	
            'bximdb' => function ($expression) {
                return "<?php echo bxinfo('imdb_id'); ?>";
            },	
            'bxidother' => function ($expression) {
                return "<?php echo bxinfo('id_other'); ?>";
            },	
            'bxisadult' => function ($expression) {
                return "<?php echo bxinfo('is_adult'); ?>";
            },	
            'bxhistory' => function ($expression = null) {
                $postIdCode = !empty($expression) ? bx_parse_value($expression) : "get_the_ID()";
                return "<?php bxhistory({$postIdCode}); ?>";
            },
            'bxccomment' => function ($expression = null) {
                $postIdCode = !empty($expression) ? bx_parse_value($expression) : "get_the_ID()";
                return "<?php echo get_comments_number({$postIdCode}); ?>";
            },
            'bxcomments' => function ($expression = null) {
                $postIdCode = !empty($expression) ? bx_parse_value($expression) : "get_the_ID()";
                $output = "<?php 
                    // Lấy comment cha
                    \$comments = get_comments([
                        'post_id'      => {$postIdCode},
                        'parent'       => 0,
                        'hierarchical' => 'threaded',
                        'status'       => 'approve'
                    ]);
                    if (!empty(\$comments)) :
                        foreach (\$comments as \$comment) :
                ?>";
                return $output;
            },
            'bxecomments' => function () {
                return "<?php 
                        endforeach; 
                    endif; 
                ?>";
            },
            'bxlich' => function ($expression) {
                $postnum    = !empty($expression) ? bx_parse_value($expression) : 10;
                $output = "<?php
                    \$args = array(
                        'post_status'    => 'publish',
                        'posts_per_page' => {$postnum},
                        'post_type'      => 'post',
                        'tax_query'      => [[
                            'taxonomy' => 'schedule',
                            'field'    => 'slug',
                            'terms'    => ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'],
                            'operator' => 'IN',
                        ]],
                    );
                    \$wp_query = new \\WP_Query(\$args);
                    if (\$wp_query->have_posts()) :
                        while (\$wp_query->have_posts()) : \$wp_query->the_post();
                ?>";
                return $output;
            },
			'bxelich' => function () {
				return "<?php 
					endwhile; 
				endif; 
				wp_reset_postdata(); 
				?>";
			},	
            'bxnext_chap' => function ($expression) {
                if (!empty($expression)) {
                    $expression         = $this->parse($expression);
                    $slug               = !empty($expression->get(0)) ? bx_parse_value($expression->get(0)) : 1;
                    $post_id            = !empty($expression->get(1)) ? bx_parse_value($expression->get(1)) : "get_the_ID()";
                    $server             = !empty($expression->get(2)) ? bx_parse_value($expression->get(2)) : 1;
                    return "<?php echo bxnext_chap({$slug}, {$post_id}, {$server}); ?>";
                }
                return "''";
            },
            'bxprev_chap' => function ($expression) {
                if (!empty($expression)) {
                    $expression         = $this->parse($expression);
                    $slug               = !empty($expression->get(0)) ? bx_parse_value($expression->get(0)) : 1;
                    $post_id            = !empty($expression->get(1)) ? bx_parse_value($expression->get(1)) : "get_the_ID()";
                    $server             = !empty($expression->get(2)) ? bx_parse_value($expression->get(2)) : 1;
                    return "<?php echo bxprev_chap({$slug}, {$post_id}, {$server}); ?>";
                }
                return "''";
            },

			/*
            |---------------------------------------------------------------------
            | @query / @posts / @endposts
            |---------------------------------------------------------------------
            */
			'query' => function ($expression) {
                return '<?php global $query; ?>'.
                    "<?php \$query = new WP_Query({$expression}); ?>";
            },
            'posts' => function ($expression) {
                $iterateLoop = '$__env->incrementLoopIndices(); $loop = $__env->getLastLoop();';
                if (! empty($expression)) {
                    return '<?php $posts = collect(); ?>'.

                        "<?php if (is_a({$expression}, 'WP_Post') || is_numeric({$expression})) : ?>".
                        "<?php \$posts->put('p', is_a({$expression}, 'WP_Post') ? ({$expression})->ID : {$expression}); ?>".
                        '<?php endif; ?>'.

                        "<?php if (is_array({$expression})) : ?>".
                        "<?php \$posts
                            ->put('ignore_sticky_posts', true)
                            ->put('posts_per_page', -1)
                            ->put('post__in', collect({$expression})
                                ->map(fn (\$post) => is_a(\$post, 'WP_Post') ? \$post->ID : \$post)->all()
                            )
                            ->put('orderby', 'post__in');
                        ?>".
                        '<?php endif; ?>'.

                        "<?php \$query = \$posts->isNotEmpty() ? new WP_Query(\$posts->all()) : {$expression}; ?>".
                        "<?php if (\$query->have_posts()) : \$__currentLoopData = range(1, \$query->post_count); \$__env->addLoop(\$__currentLoopData); while (\$query->have_posts()) : {$iterateLoop} \$query->the_post(); ?>";
                }
                $handleQuery = '<?php if (empty($query)) : ?>'.
                    '<?php global $wp_query; ?>'.
                    '<?php $query = $wp_query; ?>'.
                    '<?php endif; ?>';

                return "{$handleQuery} <?php if (\$query->have_posts()) : ?>".
                    "<?php \$__currentLoopData = range(1, \$query->post_count); \$__env->addLoop(\$__currentLoopData); while (\$query->have_posts()) : {$iterateLoop} \$query->the_post(); ?>";
            },
            'endposts' => function () {
                return '<?php endwhile; wp_reset_postdata(); $__env->popLoop(); $loop = $__env->getLastLoop(); endif; ?>';
            },

            /*
            |---------------------------------------------------------------------
            | @hasposts / @endhasposts / @noposts / @endnoposts
            |---------------------------------------------------------------------
            */

            'hasposts' => function ($expression) {
                if (! empty($expression)) {
                    return '<?php $posts = collect(); ?>'.

                        "<?php if (is_a({$expression}, 'WP_Post') || is_numeric({$expression})) : ?>".
                        "<?php \$posts->put('p', is_a({$expression}, 'WP_Post') ? ({$expression})->ID : {$expression}); ?>".
                        '<?php endif; ?>'.

                        "<?php if (is_array({$expression})) : ?>".
                        "<?php \$posts
                            ->put('ignore_sticky_posts', true)
                            ->put('posts_per_page', -1)
                            ->put('post__in', collect({$expression})
                                ->map(fn (\$post) => is_a(\$post, 'WP_Post') ? \$post->ID : \$post)->all()
                            )
                            ->put('orderby', 'post__in');
                        ?>".
                        '<?php endif; ?>'.

                        "<?php \$query = \$posts->isNotEmpty() ? new WP_Query(\$posts->all()) : {$expression}; ?>".
                        '<?php if ($query->have_posts()) : ?>';
                }

                return '<?php if (empty($query)) : ?>'.
                    '<?php global $wp_query; ?>'.
                    '<?php $query = $wp_query; ?>'.
                    '<?php endif; ?>'.

                    '<?php if ($query->have_posts()) : ?>';
            },

            'endhasposts' => function () {
                return '<?php wp_reset_postdata(); endif; ?>';
            },

            'noposts' => function ($expression) {
                if (! empty($expression)) {
                    return '<?php $posts = collect(); ?>'.

                        "<?php if (is_a({$expression}, 'WP_Post') || is_numeric({$expression})) : ?>".
                        "<?php \$posts->put('p', is_a({$expression}, 'WP_Post') ? ({$expression})->ID : {$expression}); ?>".
                        '<?php endif; ?>'.

                        "<?php if (is_array({$expression})) : ?>".
                        "<?php \$posts
                            ->put('ignore_sticky_posts', true)
                            ->put('posts_per_page', -1)
                            ->put('post__in', collect({$expression})
                                ->map(fn (\$post) => is_a(\$post, 'WP_Post') ? \$post->ID : \$post)->all()
                            )
                            ->put('orderby', 'post__in');
                        ?>".
                        '<?php endif; ?>'.

                        "<?php \$query = \$posts->isNotEmpty() ? new WP_Query(\$posts->all()) : {$expression}; ?>".
                        '<?php if (! $query->have_posts()) : ?>';
                }

                return '<?php if (empty($query)) : ?>'.
                    '<?php global $wp_query; ?>'.
                    '<?php $query = $wp_query; ?>'.
                    '<?php endif; ?>'.

                    '<?php if (! $query->have_posts()) : ?>';
            },

            'endnoposts' => function () {
                return '<?php wp_reset_postdata(); endif; ?>';
            },

            /*
            |---------------------------------------------------------------------
            | @postmeta
            |---------------------------------------------------------------------
            */

            'postmeta' => function ($expression) {
                if (! empty($expression)) {
                    $expression = $this->parse($expression);

                    if ($this->isToken($expression->get(0))) {
                        if (empty($expression->get(1))) {
                            return "<?php echo get_post_meta({$expression->get(0)}); ?>";
                        }

                        if (empty($expression->get(2))) {
                            $expression->put(2, 'false');
                        }

                        return "<?php echo get_post_meta({$expression->get(0)}, {$expression->get(1)}, {$expression->get(2)}); ?>";
                    }

                    if ($this->isToken($expression->get(1))) {
                        if (empty($expression->get(2))) {
                            $expression->put(2, 'false');
                        }

                        return "<?php echo get_post_meta({$expression->get(1)}, {$expression->get(0)}, {$expression->get(2)}); ?>";
                    }

                    if (empty($expression->get(1))) {
                        $expression->put(1, 'false');
                    }

                    if (! $this->isToken($expression->get(0))) {
                        return "<?php echo get_post_meta(get_the_ID(), {$expression->get(0)}, {$expression->get(1)}); ?>";
                    }

                    return "<?php echo get_post_meta(get_the_ID(), {$expression->get(0)}, {$expression->get(1)}); ?>";
                }

                return '<?php echo get_post_meta(get_the_ID()); ?>';
            },

            /*
            |---------------------------------------------------------------------
            | @title / @content / @excerpt / @permalink / @thumbnail
            |---------------------------------------------------------------------
            */

            'title' => function ($expression) {
                if (! empty($expression)) {
                    return "<?php echo get_the_title({$expression}); ?>";
                }

                return '<?php echo get_the_title(); ?>';
            },

            'content' => function () {
                return '<?php the_content(); ?>';
            },

            'excerpt' => function () {
                return '<?php the_excerpt(); ?>';
            },

            'permalink' => function ($expression) {
                return "<?php echo get_permalink({$expression}); ?>";
            },

            'thumbnail' => function ($expression) {
                if (! empty($expression)) {
                    $expression = $this->parse($expression);

                    if (! empty($expression->get(2))) {
                        if ($expression->get(2) === 'false') {
                            return "<?php echo get_the_post_thumbnail_url({$expression->get(0)}, is_numeric({$expression->get(1)}) ? [{$expression->get(1)}, {$expression->get(1)}] : {$expression->get(1)}); ?>"; // phpcs:ignore
                        }

                        return "<?php echo get_the_post_thumbnail({$expression->get(0)}, is_numeric({$expression->get(1)}) ? [{$expression->get(1)}, {$expression->get(1)}] : {$expression->get(1)}); ?>"; // phpcs:ignore
                    }

                    if (! empty($expression->get(1))) {
                        if ($expression->get(1) === 'false') {
                            if ($this->isToken($expression->get(0))) {
                                return "<?php echo get_the_post_thumbnail_url({$expression->get(0)}, 'thumbnail'); ?>";
                            }

                            return "<?php echo get_the_post_thumbnail_url(get_the_ID(), {$expression->get(0)}); ?>";
                        }

                        return "<?php echo get_the_post_thumbnail({$expression->get(0)}, is_numeric({$expression->get(1)}) ? [{$expression->get(1)}, {$expression->get(1)}] : {$expression->get(1)}); ?>"; // phpcs:ignore
                    }

                    if (! empty($expression->get(0))) {
                        if ($expression->get(0) === 'false') {
                            return "<?php echo get_the_post_thumbnail_url(get_the_ID(), 'thumbnail'); ?>";
                        }

                        if ($this->isToken($expression->get(0))) {
                            return "<?php echo get_the_post_thumbnail({$expression->get(0)}, 'thumbnail'); ?>";
                        }

                        return "<?php echo get_the_post_thumbnail(get_the_ID(), {$expression->get(0)}); ?>";
                    }
                }

                return "<?php echo get_the_post_thumbnail(get_the_ID(), 'thumbnail'); ?>";
            },

            /*
            |---------------------------------------------------------------------
            | @author / @authorurl / @published / @modified
            |---------------------------------------------------------------------
            */

            'author' => function ($expression) {
                if (! empty($expression)) {
                    return "<?php echo get_the_author_meta('display_name', {$expression}); ?>";
                }

                return "<?php echo get_the_author_meta('display_name'); ?>";
            },

            'authorurl' => function ($expression) {
                if (! empty($expression)) {
                    return "<?php echo get_author_posts_url({$expression}, get_the_author_meta('user_nicename', {$expression})); ?>";
                }

                return "<?php echo get_author_posts_url(get_the_author_meta('ID'), get_the_author_meta('user_nicename')); ?>";
            },

            'published' => function ($expression) {
                if (! empty($expression)) {
                    $expression = $this->parse($expression);

                    if ($this->isToken($expression->get(0))) {
                        return "<?php echo get_the_date('', {$expression->get(0)}); ?>";
                    }

                    if (! $this->isToken($expression->get(0)) && empty($expression->get(1))) {
                        return "<?php echo get_the_date({$expression->get(0)}); ?>";
                    }

                    return "<?php echo get_the_date({$expression->get(0)}, {$expression->get(1)}); ?>";
                }

                return '<?php echo get_the_date(); ?>';
            },

            'modified' => function ($expression) {
                if (! empty($expression)) {
                    $expression = $this->parse($expression);

                    if ($this->isToken($expression->get(0))) {
                        return "<?php echo get_the_modified_date('', {$expression->get(0)}); ?>";
                    }

                    if ($this->isToken($expression->get(1))) {
                        return "<?php echo get_the_modified_date({$expression->get(0)}, {$expression->get(1)}); ?>";
                    }

                    return "<?php echo get_the_modified_date({$expression->get(0)}); ?>";
                }

                return '<?php echo get_the_modified_date(); ?>';
            },

            /*
            |---------------------------------------------------------------------
            | @category / @categories / @term / @terms
            |---------------------------------------------------------------------
            */
            'category' => function ($expression) {
                $expression = $this->parse($expression);

                if ($expression->get(1) === 'true') {
                    return "<?php if (collect(get_the_category({$expression->get(0)}))->isNotEmpty()) : ?>".
                        "<a href=\"<?php echo get_category_link(collect(get_the_category({$expression->get(0)}))->shift()->cat_ID); ?>\">". // phpcs:ignore
                        "<?php echo collect(get_the_category({$expression->get(0)}))->shift()->name; ?>".
                        '</a>'.
                        '<?php endif; ?>';
                }

                if (! empty($expression->get(0))) {
                    if ($expression->get(0) === 'true') {
                        return '<?php if (collect(get_the_category())->isNotEmpty()) : ?>'.
                            '<a href="<?php echo get_category_link(collect(get_the_category())->shift()->cat_ID); ?>">'.
                            '<?php echo collect(get_the_category())->shift()->name; ?>'.
                            '</a>'.
                            '<?php endif; ?>';
                    }

                    return "<?php if (collect(get_the_category({$expression->get(0)}))->isNotEmpty()) : ?>".
                        "<?php echo collect(get_the_category({$expression->get(0)}))->shift()->name; ?>".
                        '<?php endif; ?>';
                }

                return '<?php if (collect(get_the_category())->isNotEmpty()) : ?>'.
                    '<?php echo collect(get_the_category())->shift()->name; ?>'.
                    '<?php endif; ?>';
            },

            'categories' => function ($expression) {
                $expression = $this->parse($expression);

                if ($expression->get(1) === 'true') {
                    return "<?php echo get_the_category_list(', ', '', {$expression->get(0)}); ?>";
                }

                if ($expression->get(0) === 'true') {
                    return "<?php echo get_the_category_list(', ', '', get_the_ID()); ?>";
                }

                if (is_numeric($expression->get(0))) {
                    return "<?php echo strip_tags(get_the_category_list(', ', '', {$expression->get(0)})); ?>";
                }

                return "<?php echo strip_tags(get_the_category_list(', ', '', get_the_ID())); ?>";
            },

            'term' => function ($expression) {
                $expression = $this->parse($expression);

                if (! empty($expression->get(2)) && $expression->get(2) === 'true') {
                    return "<?php if (get_the_terms({$expression->get(1)}, {$expression->get(0)})) : ?>". // phpcs:ignore
                        "<a href=\"<?php echo get_term_link(collect(get_the_terms({$expression->get(1)}, {$expression->get(0)}))->shift()->term_id); ?>\">". // phpcs:ignore
                        "<?php echo collect(get_the_terms({$expression->get(1)}, {$expression->get(0)}))->shift()->name; ?>".
                        '</a>'.
                        '<?php endif; ?>';
                }

                if (! empty($expression->get(1))) {
                    if ($expression->get(1) === 'true') {
                        return "<?php if (get_the_terms(get_the_ID(), {$expression->get(0)})) : ?>".
                            "<a href=\"<?php echo get_term_link(collect(get_the_terms(get_the_ID(), {$expression->get(0)}))->shift()->term_id); ?>\">". // phpcs:ignore
                            "<?php echo collect(get_the_terms(get_the_ID(), {$expression->get(0)}))->shift()->name; ?>".
                            '</a>'.
                            '<?php endif; ?>';
                    }

                    return "<?php if (get_the_terms({$expression->get(1)}, {$expression->get(0)})) : ?>". // phpcs:ignore
                        "<?php echo collect(get_the_terms({$expression->get(1)}, {$expression->get(0)}))->shift()->name; ?>".
                        '<?php endif; ?>';
                }

                if (! empty($expression->get(0))) {
                    return "<?php if (get_the_terms(get_the_ID(), {$expression->get(0)})) : ?>".
                        "<?php echo collect(get_the_terms(get_the_ID(), {$expression->get(0)}))->shift()->name; ?>".
                        '<?php endif; ?>';
                }
            },

            'terms' => function ($expression) {
                $expression = $this->parse($expression);

                if ($expression->get(2) === 'true') {
                    return "<?php echo get_the_term_list({$expression->get(1)}, {$expression->get(0)}, '', ', '); ?>";
                }

                if (! empty($expression->get(1))) {
                    if ($expression->get(1) === 'true') {
                        return "<?php echo get_the_term_list(get_the_ID(), {$expression->get(0)}, '', ', '); ?>";
                    }

                    return "<?php echo strip_tags(get_the_term_list({$expression->get(1)}, {$expression->get(0)}, '', ', ')); ?>";
                }

                if (! empty($expression->get(0))) {
                    return "<?php echo strip_tags(get_the_term_list(get_the_ID(), {$expression->get(0)}, '', ', ')); ?>";
                }
            },

            /*
            |---------------------------------------------------------------------
            | @image
            |---------------------------------------------------------------------
            */

            'image' => function ($expression) {
                $expression = $this->parse($expression);
                $output = "<?php \$__imageDirective = {$expression->get(0)}; ?>";

                if (! $this->isToken($expression->get(0))) {
                    $output .= "<?php \$__imageDirective = function_exists('acf') \n
                        ? (get_field(\$__imageDirective) ?? get_sub_field(\$__imageDirective) ?? get_field(\$__imageDirective, 'option') ?? \$__imageDirective)
                        : \$__imageDirective; ?>";

                    $output .= "<?php \$__imageDirective = is_array(\$__imageDirective) && ! empty(\$__imageDirective['id']) ? \$__imageDirective['id'] : \$__imageDirective; ?>";
                }

                if ($this->strip($expression->get(1)) == 'raw') {
                    return $output.'<?php echo wp_get_attachment_url($__imageDirective); ?>';
                }

                if (! empty($expression->get(3))) {
                    $expression = $expression->put(2, $this->unwrap($this->toString($expression->slice(2)->all(), true)));
                }

                if (! empty($expression->get(2)) && ! $this->isArray($expression->get(2))) {
                    $expression = $expression->put(2, $this->toString(['alt' => $this->strip($expression->get(2))]));
                }

                if ($expression->get(1)) {
                    if ($expression->get(2)) {
                        return $output."<?php echo wp_get_attachment_image(
                            \$__imageDirective,
                            {$expression->get(1)},
                            false,
                            {$expression->get(2)}
                        ); ?>";
                    }

                    return $output."<?php echo wp_get_attachment_image(\$__imageDirective, {$expression->get(1)}, false); ?>";
                }

                if ($expression->get(2)) {
                    return $output."<?php echo wp_get_attachment_image(
                        \$__imageDirective,
                        'full',
                        false,
                        {$expression->get(2)}
                    ); ?>";
                }

                return $output."<?php echo wp_get_attachment_image(\$__imageDirective, 'thumbnail', false); ?>";
            },

            /*
            |---------------------------------------------------------------------
            | @role / @endrole / @user / @enduser / @guest / @endguest
            |---------------------------------------------------------------------
            */

            'role' => function ($expression) {
                $expression = $this->parse($expression);
                $condition = [];

                foreach ($expression as $value) {
                    $condition[] = "in_array(strtolower({$value}), (array) wp_get_current_user()->roles) ||";
                }

                $conditions = implode(' ', $condition);

                $conditions = Str::beforeLast($conditions, ' ||');

                return "<?php if (is_user_logged_in() && ({$conditions})) : ?>";
            },

            'endrole' => function () {
                return '<?php endif; ?>';
            },

            'user' => function () {
                return '<?php if (is_user_logged_in()) : ?>';
            },

            'enduser' => function () {
                return '<?php endif; ?>';
            },

            'guest' => function () {
                return '<?php if (! is_user_logged_in()) : ?>';
            },

            'endguest' => function () {
                return '<?php endif; ?>';
            },

            /*
            |---------------------------------------------------------------------
            | @shortcode
            |---------------------------------------------------------------------
            */

            'shortcode' => function ($expression) {
                return "<?php echo do_shortcode({$expression}); ?>";
            },

            /*
            |---------------------------------------------------------------------
            | @wpautop / @wpautokp
            |---------------------------------------------------------------------
            */

            'wpautop' => function ($expression) {
                return "<?php echo wpautop({$expression}); ?>";
            },

            'wpautokp' => function ($expression) {
                return "<?php echo wpautop(wp_kses_post({$expression})); ?>";
            },

            /*
            |---------------------------------------------------------------------
            | @action / @filter
            |---------------------------------------------------------------------
            */

            'action' => function ($expression) {
                return "<?php do_action({$expression}); ?>";
            },

            'filter' => function ($expression) {
                return "<?php echo apply_filters({$expression}); ?>";
            },

            /*
            |---------------------------------------------------------------------
            | @wphead / @wpfooter
            |---------------------------------------------------------------------
            */

            'wphead' => function () {
                return '<?php wp_head(); ?>';
            },

            'wpfooter' => function () {
                return '<?php wp_footer(); ?>';
            },

            /*
            |---------------------------------------------------------------------
            | @bodyclass / @wpbodyopen
            |---------------------------------------------------------------------
            */

            'bodyclass' => function ($expression) {
                return "<?php body_class({$expression}); ?>";
            },

            'wpbodyopen' => function () {
                return "<?php if (function_exists('wp_body_open')) { wp_body_open(); } else { do_action('wp_body_open'); } ?>";
            },

            /*
            |---------------------------------------------------------------------
            | @postclass
            |---------------------------------------------------------------------
            */

            'postclass' => function ($expression) {
                return "<?php post_class({$expression}); ?>";
            },

            /*
            |---------------------------------------------------------------------
            | @sidebar / @hassidebar / @endhassidebar
            |---------------------------------------------------------------------
            */

            'sidebar' => function ($expression) {
                return "<?php dynamic_sidebar($expression); ?>";
            },

            'hassidebar' => function ($expression) {
                return "<?php if (is_active_sidebar($expression)) : ?>";
            },

            'endhassidebar' => function () {
                return '<?php endif; ?>';
            },

            /*
            |---------------------------------------------------------------------
            | @__
            |---------------------------------------------------------------------
            */

            '__' => function ($expression) {
                $expression = $this->parse($expression);

                return "<?php _e({$expression[0]}, {$expression[1]}); ?>";
            },

            /*
            |---------------------------------------------------------------------
            | @thememod
            |---------------------------------------------------------------------
            */

            'thememod' => function ($expression) {
                $expression = $this->parse($expression);

                $mod = $expression->get(0);
                $default = $expression->get(1);

                if (! empty($default)) {
                    return "<?php echo get_theme_mod({$mod}, {$default}); ?>";
                }

                return "<?php echo get_theme_mod({$mod}); ?>";
            },

            /*
            |---------------------------------------------------------------------
            | @menu / @hasmenu / @endhasmenu
            |---------------------------------------------------------------------
            */

            'menu' => function ($expression) {
                return "<?php wp_nav_menu($expression); ?>";
            },

            'hasmenu' => function ($expression) {
                return "<?php if (has_nav_menu($expression)) : ?>";
            },

            'endhasmenu' => function () {
                return '<?php endif; ?>';
            },
        ];
    }

}
