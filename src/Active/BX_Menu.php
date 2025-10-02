<?php
namespace Buxt\Active;
use Buxt\Active\BX_Active;
class BX_Menu {
    public function __construct() {
        add_action('wp_ajax_bxcheck_license_details', [$this, 'buxt_check_license_details']);
        add_action('wp_ajax_bxactivate_license', [$this, 'buxt_activate_license']);
        add_action('wp_ajax_bxdeactivate_license', [$this, 'buxt_deactivate_license']);
        add_action('admin_enqueue_scripts', [$this, 'enqueue_admin_scripts'], 10);
        add_action('admin_enqueue_scripts', [$this, 'enqueue_admin_scripts'], 10);
        add_filter('the_content', [$this, 'bxset_copyright'], 10);
    }

    public function bxset_copyright($content){
        $copyright  = '';
        if (!bxactive()) {
            $copyright = '<footer class="fancy-content" style="color: #ff5951;font-family: inherit;"><b>'. bxlang('Your license key is invalid or not activated, Please buy a valid license and enter it in the options page. [<a href="https://buxt.net" title="Theme developed by buxt.net">Theme developed by buxt.net</a>]').'</b></footer>';
        }
        return $copyright . $content;
    }

    public function buxt_check_license_details(){
        global $config;
        $response = new BX_Active();
        $license_data = $response->verify_license();
        if (isset($license_data['status']) && $license_data['status'] === false) {
            delete_option(get_template() . '_license');
        }
        wp_send_json($license_data);
    }
	
	public function buxt_deactivate_license(){
        global $config;
        $response = new BX_Active();
        $license_key = isset($_POST['license_key']) ? sanitize_text_field($_POST['license_key']) : '';
        $client_name = get_option('admin_email');
        
        if (!empty($license_key) && !empty($client_name)) {
            $license_data = $response->deactivate_license($license_key, $client_name);
        } else {
            $license_data = $response->deactivate_license();
        }
        delete_option(get_template() . '_license');
        wp_send_json($license_data);
    }
    
	public function buxt_activate_license() {
        global $config;
        $response = new BX_Active();
        $license_key = isset($_POST['license_key']) ? sanitize_text_field($_POST['license_key']) : '';
        $client_name = get_option('admin_email');
        if (!empty($license_key) && !empty($client_name)) {
            update_option(get_template() . '_license_key', $license_key);
            $license_data = $response->activate_license($license_key, $client_name);
            if (isset($license_data['status']) && $license_data['status'] === true) {
                update_option(get_template() . '_license', $license_data);
            }
            
            wp_send_json($license_data);
        } else {
            wp_send_json(['status' => false, 'message' => 'License key and email admin can\'t be empty!']);
        }
    }

    public function enqueue_admin_scripts($hook) {
        global $post;
        $license_css_url = bxurl('/css/license-details.css');
        $license_js_url = bxurl('/js/license-manager.js');
        $bootstrap_js = bxurl('/js/bootstrap.bundle.js');

        if (!empty($license_css_url) && !empty($license_js_url)) {
            wp_enqueue_style('license-details', $license_css_url, [], time());
            wp_enqueue_script('bx-license-manager', $license_js_url, [], time(), true);
            wp_enqueue_script('bootstrap', $bootstrap_js, ['jquery'], time(), true);
            wp_localize_script('bx-license-manager', 'bx_license', [
                'ajax_url' => admin_url('admin-ajax.php'),
                'i18n'     => bxi18n(),
                'nonce'    => wp_create_nonce('ajax-nonce'),
                'rest_url'      => esc_url_raw(rest_url('buxt/v1')),
                'rest_nonce'    => wp_create_nonce('wp_rest'),
            ]);
        }

        if ($hook === 'toplevel_page_bx-manager') {
            $boostrap_css   = bxurl('/css/bootstrap.min.css');
            $datatables_css = bxurl('/css/datatables.min.css');
            $manager_js     = bxurl('/js/bx-manager.min.js');
            $datatables_js  = bxurl('/js/datatables.min.js');

            wp_enqueue_style('bootstrap', $boostrap_css, [], time());
            wp_enqueue_style('datatables', $datatables_css, [], time());
            wp_enqueue_script('datatables', $datatables_js, ['jquery'], time(), true);
            wp_enqueue_script('bootstrap', $bootstrap_js, ['jquery'], time(), true);
            wp_enqueue_script('bx-manager', $manager_js, ['jquery', 'datatables'], time(), true);
            wp_localize_script('bx-manager', 'bxconfig', [
                'key_manager'   => _BXMGR,
                'key_meta'      => _BXMETA,
                'nonce'         => wp_create_nonce('bx_postmeta_nonce'),
                'ajaxurl'       => admin_url('admin-ajax.php'),
                'strings'   => [
                    'loading' => bxrlang('Loading...'),
                    'choose_server' => bxrlang('Choose Server'),
                    'save' => bxrlang('Save'),
                    'confirm_delete' => bxrlang('Are you sure you want to delete this item?'),
                    'confirm_bulk_delete' => bxrlang('Are you sure you want to delete %d selected items?'),
                    'success_update' => bxrlang('Updated successfully!'),
                    'success_delete' => bxrlang('Deleted successfully!'),
                    'success_save' => bxrlang('Saved successfully!'),
                    'error_occurred' => bxrlang('An error occurred: %s'),
                    'no_items_selected' => bxrlang('Please select at least one item'),
                    'processing' => bxrlang('Processing...'),
                    'search' => bxrlang('Search:'),
                    'show_entries' => bxrlang('Show _MENU_ entries'),
                    'showing_entries' => bxrlang('Showing _START_ to _END_ of _TOTAL_ entries'),
                    'no_entries' => bxrlang('Showing 0 to 0 of 0 entries'),
                    'filtered_entries' => bxrlang('(filtered from _MAX_ total entries)'),
                    'first' => bxrlang('First'),
                    'last' => bxrlang('Last'),
                    'next' => bxrlang('Next'),
                    'previous' => bxrlang('Previous')
                ]
            ]);
        }

        if (($hook === 'post-new.php' || $hook === 'post.php') && isset($post) && $post->post_type === 'post') {
            $metaboxes_css = bxurl('/css/bxcss-metaboxes.css');
            $metaboxes_js = bxurl('/js/bxscript-metaboxes.js');
            if (!empty($metaboxes_css)) wp_enqueue_style('metaboxes-css-components', $metaboxes_css, [], time());
            wp_enqueue_script('bootstrap-script', '//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js', [], time(), true);
            if (!empty($metaboxes_js)) {
                wp_enqueue_script('metaboxes-script', $metaboxes_js, [], time(), true);
                wp_localize_script('metaboxes-script', 'bxobject', [
                    'ajax_url'  => admin_url('admin-ajax.php'),
                    'i18n'      => bxi18n(),
                    'bxtypepost' => bxtypepost(),
                ]);
            }
        }
    }
}
