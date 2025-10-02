<?php 
namespace Buxt\Action;

class BX_Player { 
	public function __construct() {
        if (!in_array(_BUXTT, ['_bxvideos', '_bxmovies'])) {
            return;
        }
        add_action('buxt_player', [$this, 'player_box'], 10, 1);
        add_action('wp_enqueue_scripts', [$this, 'bx_enqueue_player']);
        add_action('rest_api_init', [$this, 'register_routes']);
    }
    
    public function register_routes() {
        register_rest_route('buxt/v1', '/player', [
            'methods'  => 'POST',
            'callback' => [$this, 'buxt_rest_player'],
            'permission_callback' => '__return_true',
            'args' => [
                'postid' => [
                    'required' => true,
                    'sanitize_callback' => 'absint',
                ],
                'slug' => [
                    'required' => false,
                    'sanitize_callback' => function($value) {
                        return sanitize_text_field(str_replace('-', '_', $value));
                    }
                ],
                'server' => [
                    'required' => false,
                    'sanitize_callback' => 'absint',
                ],
                'subsv_id' => [
                    'required' => false,
                    'sanitize_callback' => 'absint',
                ],
            ],
        ]);
    }

    public function buxt_rest_player($request) {
        $nonce = $request->get_header('x_wp_nonce');
        if (!wp_verify_nonce($nonce, 'wp_rest')) {
            return new \WP_Error('rest_nonce_invalid', __('Invalid REST nonce.'), ['status' => 403]);
        }

        $post_id  = $request->get_param('postid');
        $slug     = $request->get_param('slug');
        $server   = $request->get_param('server');
        $subsv_id = $request->get_param('subsv_id');

        if (!$post_id) {
            return rest_ensure_response(['status' => false, 'code' => 403]);
        }
        $this->BXPlayer($post_id, $slug, $server, $subsv_id);

        return rest_ensure_response(['status' => 'ok']);
    }
 
    public function player_box() {
        $post_id = get_the_ID();
        $meta = get_post_meta($post_id, _BXMETA, true);
        $copyright = !empty($meta['copyright']);
        $check = $meta['status'] ?? '';
        $ratios = [
            '4_3'  => 'bxplayer-4x3',
            '21_9' => 'bxplayer-21x9',
            '16_9' => 'bxplayer-16x9',
        ];
        $aspectratio = $ratios[_buxt('aspect_ratio')] ?? 'bxplayer-16x9';
        ob_start();
        if ( function_exists('bxcountry_blocker') && bxcountry_blocker($post_id) ) {
            $bxcountry_blocker_msg = apply_filters('bxcountry_blocker_msg', bxrlang('We are unable to find the video you are looking for.<br>There could be several reasons for this, for example it got removed by the owner or this content is not available in your country!'));
            ?>
            <div class="bxplayer-notice"><p><i class="fas fa-times-circle"></i> <?php echo $bxcountry_blocker_msg; ?></p></div>
            <?php
            echo ob_get_clean();
            return;
        }
        ?>
        <?php if ($copyright): ?>
            <div id="is_copyright" class="<?= esc_attr($aspectratio); ?> bxplayer-relative">
                <div class="bxplayer-notice">
                    <i class="fa fa-exclamation-circle me-2"></i> <?= bxelang('Copyright infringement!'); ?>
                </div>
            </div>
        <?php else: ?>
            <div id="bxplayer-wrapper" class="<?= esc_attr($aspectratio); ?>">
                <div id="bxplayer-loader"></div>
                <div id="ajax-player"></div>
                <?php if ($check === 'trailer'): ?>
                    <div class="<?= esc_attr($aspectratio); ?> bxplayer-relative">
                        <div class="bxplayer-notice">
                            <i class="fa fa-exclamation-circle me-2"></i> <?= bxelang('Trailer'); ?>
                        </div>
                    </div>
                <?php endif; ?>
            </div>
        <?php endif; ?>
        <?php
        echo ob_get_clean();
    }

    public function bx_enqueue_player() {
        $data = [
            'ajax_url'      => admin_url('admin-ajax.php'),
            'is_single'     => is_single(),
            'rest_url'      => esc_url_raw(rest_url('buxt/v1')),
            'i18n'          => bxi18n(),
            'rest_nonce'    => wp_create_nonce('wp_rest'),
        ];
        if(get_option('bxreport_issues')){
            $data['bxrp']     = get_option('bxreport_issues');
        }
        if (bxjwplayer('detect_adblock', false)) {
            wp_enqueue_script('bx-adblock', bxurl('/player/blockadblock.min.js'), [], _BXVERSION, true);
        }
        if (is_single()) {
            $post_id = get_the_ID();
            $meta = get_post_meta($post_id, _BXMETA, true);
            $config_cache = (array) _buxt('config_cache') ?: [];
            $data['postid']     = $post_id;
            $data['server']     = get_query_var('server') ?: 1;
            $data['slug']       = get_query_var('slug') ?: 1;
            $resume_string      = get_the_title($post_id) . $post_id . $data['server'] . $data['slug'];
            $data['resumeId']   = md5($resume_string);
            $data['player'] = base64_encode(json_encode([
                'title'             => get_the_title($post_id),
                'bxplayer_error'    => _buxt('bxplayer_error', 'display_modal'),
                'autoreport'        => (int) _buxt('bxauto_report', false),
                'jw_adcode'         => (int) _buxt('jw_player_show_ad', false),
                'show_logo'         => (int) _buxt('show_logo_player', false),
                'detect'            => (int) _buxt('detect_adblock', false),
                'resume_playback'   => (int) _buxt('resume_playback', false),
                'vast_file'         => bxvast('vast_file'),
                'skipoffset'        => bxvast('skipoffset', 5),
                'skipmessage'       => bxvast('skipmessage', 'Skip ad in xx seconds'),
                'skiptext'          => bxvast('skiptext', 'Skip ad'),
                'poster'            => $meta['poster'] ?? bxjwlogo('jw_player_poster_image'),
                'logo_file'         => bxjwlogo('player_logo'),
                'logo_link'         => bxjwlogo('player_logo_link'),
                'logo_hide'         => (int) bxjwlogo('player_logo_hide', false),
                'logo_position'     => bxjwlogo('player_logo_position', 'top-right'),
                'key'               => bxjwplayer('jw_player_license_key', 'MBvrieqNdmVL4jV0x6LPJ0wKB/Nbz2Qq/lqm3g=='),
                'jw_color'          => bxjwplayer('jw_tracks_color', '#ffffff'),
                'jw_font'           => bxjwplayer('jw_tracks_font_size', 16),
                'floating_player'   => (int) bxjwplayer('floating_player', false),
                'autopause'         => (int) bxjwplayer('jw_player_autopause', false),
                'autoplay'          => (int) bxjwplayer('jw_player_autoplay', false),
                'aspect_ratio'      => str_replace('_', ':', bxjwplayer('aspect_ratio', '16:9')),
                'player_sharing'    => (int) bxjwplayer('player_sharing', false),
                'jw_abouttext'      => bxjwplayer('jw_player_about_text', get_bloginfo('name')),
                'jw_aboutlink'      => bxjwplayer('jw_player_about_link', home_url()),
                'adb_msg'           => BX_Helper::adblock_msg(),
                'auto_reset_cache'  => (int) $config_cache['auto_reset_cache'] ?: 0,
                'type'              => _BUXTT === '_bxvideos' ? 'video' : 'movie',
            ]));
            wp_enqueue_script('bx-crypto', bxurl('/player/crypto-js.min.js'), [], _BXVERSION, true);
            wp_enqueue_script('bx-jwplayer', bxurl('/jwplayer/jwplayer.js'), [], _BXVERSION, true);
            wp_localize_script('bx-jwplayer', 'jw', ['url' => bxurl('/jwplayer/')]);
            wp_enqueue_style('bx-player', bxurl('/player/player.min.css'), [], time());
            wp_enqueue_script('bx-player', bxurl('/player/player.min.js'), ['jquery'], _BXVERSION, true);
            wp_localize_script('bx-player', 'bx', $data);
        }
    }
    
    public function encryptData($data){
        $key = substr(hash('sha256', 'TheQuickBrownFoxWasJumping'), 0, 32);
        $iv = substr(hash('sha256', '4f01bede9221586c'), 0, 16);
        $encrypted = openssl_encrypt($data, 'aes-256-cbc', $key, 0, $iv);
        return $encrypted;
    }
    
    private function detect_hls($link, $tracks = []) {
        if (preg_match('/\.m3u8(\?.*)?$/i', $link)) {
            $sources = [];
            if (_buxt('player_cache', false)) {
                $doccahe = \BX_Cache::readCache($link);
                $sources = $doccahe ? json_decode($doccahe, true) : null;
                if (!$sources) {
                    $sources = [['file' => $link, 'type' => 'hls']];
                    \BX_Cache::saveCache($link, json_encode($sources));
                }
            } else {
                $sources = [['file' => $link, 'type' => 'hls']];
            }
            return [
                'sources' => $sources,
                'tracks' => $tracks,
                'type' => 'hls'
            ];
        }
        return [
            'sources' => '',
            'tracks' => $tracks,
            'type' => 'mp4'
        ];
    }

	private function detect_embed($args) {
        $link = $args['link'];
        $tracks = $args['subtitle'] ?? [];
        $detectembed = '';
        if (strpos($link, 'youtube') !== false) {
            $id = BX_Helper::getYoutubeId($link);
            $detectembed = '//www.youtube.com/embed/' . $id;
        } elseif (strpos($link, '.m3u8') === false) {
            $detectembed = $link;
        } elseif (strpos($link, 'drive') !== false) {
            $detectembed = str_replace('view', 'preview', $link);
        } elseif (strpos($link, 'dailymotion') !== false) {
            $id = BX_Helper::getDailyMotionId($link);
            $detectembed = '//www.dailymotion.com/embed/video/' . $id;
        } elseif (strpos($link, 'vimeo') !== false) {
            $id = BX_Helper::getVimeoId($link);
            $detectembed = '//player.vimeo.com/video/' . $id;
        } elseif (strpos($link, 'ok.ru/video/') !== false) {
            $detectembed = str_replace('video', 'videoembed', $link);
        } else {
            $detectembed = $link;
        }
        $embed_url = apply_filters('embed_url', (object)[
            'post_id' => $args['post_id'],
            'link' => $detectembed,
            'subtitle' => $args['subtitle'],
            'sublabel' => $args['sublabel']
        ]);
        $linkembed = has_filter('embed_url') ? $embed_url->link : $detectembed;
        return [
            'sources'   => array(['file' => bxurl('/player/1s_blank.mp4'), 'label' => 'HD', 'type' => 'video/mp4']),
            'tracks'    => [],
            'embedUrl'  => '<iframe class="bxplayer-embed" src="' . $linkembed . '" allowfullscreen></iframe>',
            'type'      => 'embed'
        ];
    }
	
	public function BXPlayer($post_id, $slug = '', $server = 1, $sub_server = 0) {
        $data = json_decode(stripslashes(get_post_meta($post_id, _BXMGR, true)), true);
        if (!empty($data) && defined('_BUXTT') && _BUXTT === '_bxmovies') { 
            $movie_data = $data; 
        } elseif (!empty($data) && defined('_BUXTT') && _BUXTT === '_bxvideos') { 
            $movie_data = [[ 
                'server_name' => 'Videos', 
                'server_data' => $data
            ]];
        } else { 
            wp_send_json_success($this->encryptData(json_encode(['status' => false, 'msg' => 'No video data']))); 
            return; 
        }
        $server = max(1, intval($server));
        
        $slug = $slug ?: 1;
        $episode_index = max(0, intval($slug) - 1);
        if (empty($movie_data[$server - 1]['server_data'][$episode_index])) {
            wp_send_json_success($this->encryptData(json_encode(['data' => ['status' => true, 'code' => 403]])));
            return;
        }
        $ep = $movie_data[$server - 1]['server_data'][$episode_index];
        if ($sub_server && !empty($ep['backup_servers'][$sub_server - 1])) {
            $ep = $ep['backup_servers'][$sub_server - 1];
        }
        $subtitles = $ep['subtitles'] ?? [];
        $tracks = '[' . implode(',', array_map(fn($sub, $k) => sprintf(
            '{file: "%s",label: "%s",kind: "%s", default: %s}',
            trim($sub['file']),
            trim($sub['label']),
            $sub['kind'] ?? 'captions',
            ($sub['default'] === true || $sub['default'] === 'true' || $k === 0) ? 'true' : 'false'
        ), $subtitles, array_keys($subtitles))) . ']';
        $ep_sub_file = implode('|', array_column($subtitles, 'file'));
        $ep_sub_label = implode('|', array_column($subtitles, 'label'));

        $bxcustom_player_types = apply_filters('bxcustom_player_types', (object)[
            'post_id'      => $post_id,
            'link'         => $ep['link'],
            'episode_type' => $ep['type'] ?? 'mp4',
            'subtitle'     => $ep_sub_file,
            'sublabel'     => $ep_sub_label,
            'tracks'       => $tracks,
            'sources'      => '',
            'player_type'  => ''
        ]);

        if (!empty($bxcustom_player_types->player_type) && $bxcustom_player_types->player_type === 'custom_api' && !empty($bxcustom_player_types->sources)) {
            $sources = $bxcustom_player_types->sources;
            if (is_string($sources)) {
                $decoded = json_decode($sources, true);
                if (json_last_error() === JSON_ERROR_NONE) {
                    $sources = $decoded;
                }
            }
            if (is_array($sources) && count($sources) > 0) {
                $response = [
                    'sources' => $sources,
                    'tracks'  => $tracks,
                    'type'    => $bxcustom_player_types->episode_type ?: 'mp4'
                ];
                wp_send_json_success($this->encryptData(json_encode($response)));
                return;
            }
        }

        if (!empty($bxcustom_player_types->player_type) && $bxcustom_player_types->player_type === 'custom_iframe' && !empty($bxcustom_player_types->sources)) {
            $embed = $bxcustom_player_types->sources;
            if (is_string($embed) && preg_match('#^https?://#i', $embed)) {
                $embedHtml = '<iframe class="bxplayer-embed" src="' . esc_url($embed) . '" allowfullscreen></iframe>';
            } else {
                $embedHtml = $embed;
            }
            wp_send_json_success($this->encryptData(json_encode([
                'sources'  => '',
                'tracks'   => [],
                'type'     => 'embed',
                'embedUrl' => $embedHtml
            ])));
            return;
        }

        $response = ['sources' => '', 'tracks' => $tracks, 'type' => 'mp4'];
        switch ($ep['type'] ?? 'mp4') {
            case 'link':
                $response = $this->detect_hls($ep['link'], $tracks);
                break;
            case 'mp4':
                $response['sources'] = [['file' => $ep['link'], 'label' => 'HD', 'type' => 'video/mp4']];
                break;
            case 'embed':
                $response = $this->detect_embed([
                    'post_id' => $post_id,
                    'link' => $ep['link'],
                    'subtitle' => $ep_sub_file,
                    'sublabel' => $ep_sub_label
                ]);
                break;
            default:
                if (preg_match('/\.(mp4|webm|mov)(\?.*)?$/i', $ep['link'])) {
                    $response['sources'] = [['file' => $ep['link'], 'label' => 'HD', 'type' => 'video/mp4']];
                } elseif (preg_match('/\.m3u8(\?.*)?$/i', $ep['link'])) {
                    $response = $this->detect_hls($ep['link'], $tracks);
                } else {
                    $response = $this->detect_embed([
                        'post_id' => $post_id,
                        'link' => $ep['link'],
                        'subtitle' => $ep_sub_file,
                        'sublabel' => $ep_sub_label
                    ]);
                }
                break;
        }

        wp_send_json_success($this->encryptData(json_encode($response)));
    }

}