<?php
namespace Buxt\Action;

class BX_Helper {
    public static function compress_htmlcode($codedata) {
        $searchdata = array('/\>[^\S ]+/s', '/[^\S ]+\</s', '/(\s)+/s');
        $replacedata = array('>', '<', '\\1');
        return preg_replace($searchdata, $replacedata, $codedata);
    }

    public static function adblock_msg() {
        if (!bxjwplayer('detect_adblock', false)) {
            return '';
        }
        $adblock  = '<div class="alert alert-danger text-center p-4 rounded-3">';
        $adblock .= '<p class="fw-bold mb-3">';
        $adblock .= '<img class="me-2" src="' . bxurl('/images/adblocker.png') . '" alt="AdBlock" />';
        $adblock .= __('AdBlock Detected!', 'hnepis') . '</p>';
        if (bxjwplayer('adblock_msg')) {
            $adblock .= self::compress_htmlcode(bxjwplayer('adblock_msg'));
        } else {
            $adblock .= bxrlang('Please disable AdBlock to continue watching.');
        }
        $adblock .= '</div>';
        return $adblock;
    }

    public static function removeWhiteSpace($text) {
        $text = preg_replace('/[\t\n\r\0\x0B]/', '', $text);
        $text = preg_replace('/([\s])\1+/', ' ', $text);
        return trim($text);
    }

    public static function set_post_modified($post_id) {
        wp_update_post([
            'ID' => $post_id,
            'post_modified_gmt' => gmdate('Y-m-d H:i:s')
        ]);
    }

    public static function get_eps_arr($ep_start, $ep_end) {
        return range($ep_start, $ep_end);
    }

    public static function array_key_last($array) {
        return empty($array) ? null : array_key_last($array); // PHP 7.3+
    }

    public static function array_value_first($arr) {
        return reset($arr) ?: null;
    }

    public static function matchRegex($strContent, $strRegex, $intIndex = null) {
        preg_match_all($strRegex, $strContent, $arrMatches);
        if ($arrMatches === false) return false;
        if ($intIndex !== null && isset($arrMatches[$intIndex][0])) {
            return $arrMatches[$intIndex][0];
        }
        return $arrMatches;
    }

    public static function find_youtube_trailer_url($key) {
		$YouTubeURL = "https://www.youtube.com/results?search_query=".urldecode($key);
		$YouTubeHTML = BX_Helper::cURL($YouTubeURL);
		$trailer_id = BX_Helper::matchRegex($YouTubeHTML, '~href="/watch\?v=(.*)"~Uis', 1);
		$trailer = "https://www.youtube.com/watch?v=$trailer_id";
		return $trailer;
	}
    public static function strposArr($string, $arr, $offset=0) {
	  	if(!is_array($arr)) $arr = array($arr);
	  	foreach($arr as $query) {
	      	if(strpos($string, $query, $offset) !== false) return true; // stop on first true result
	  	}
	  	return false;
	}

    public static function number_format_short( $n, $precision = 1 ) {
		if ($n < 900) { // 0 - 900
			$n_format = number_format($n, $precision);
			$suffix = '';
		} else if ($n < 900000) { // 0.9k-850k
			$n_format = number_format($n / 1000, $precision);
			$suffix = 'K';
		} else if ($n < 900000000) { // 0.9m-850m
			$n_format = number_format($n / 1000000, $precision);
			$suffix = 'M';
		} else if ($n < 900000000000) { // 0.9b-850b
			$n_format = number_format($n / 1000000000, $precision);
			$suffix = 'B';
		} else { // 0.9t+
			$n_format = number_format($n / 1000000000000, $precision);
			$suffix = 'T';
		}
		if ( $precision > 0 ) {
			$dotzero = '.' . str_repeat( '0', $precision );
			$n_format = str_replace( $dotzero, '', $n_format );
		}
		return $n_format . $suffix;
	}
    public static function bxstring_limit_word($string, $word_limit){
	    $words = explode(' ', $string, ($word_limit + 1));
	    if (count($words) > $word_limit) {
	        array_pop($words);
	    }
	    return implode(' ', $words);
	}
    public static function getDriveId($url) {
		preg_match('/[-\w]{25,}/is', $url, $id);
		return $id[0];
	}
    public static function getDailyMotionId($url) {
        preg_match('/dailymotion\.com\/(.*?)video\/(.*)/is', $url, $matches);
        return $matches[2];
	}
    public static function getVimeoId($url) {
		$regex = '~
			# Match Vimeo link and embed code
			(?:<iframe [^>]*src=")?         # If iframe match up to first quote of src
			(?:                             # Group vimeo url
					https?:\/\/             # Either http or https
					(?:[\w]+\.)*            # Optional subdomains
					vimeo\.com              # Match vimeo.com
					(?:[\/\w]*\/videos?)?   # Optional video sub directory this handles groups links also
					\/                      # Slash before Id
					([0-9]+)                # $1: VIDEO_ID is numeric
					[^\s]*                  # Not a space
			)                               # End group
			"?                              # Match end quote if part of src
			(?:[^>]*></iframe>)?            # Match the end of the iframe
			(?:<p>.*</p>)?                  # Match any title information stuff
			~ix';

		preg_match( $regex, $url, $matches );

		return $matches[1];
	}
    public static function getYoutubeId($url) {
		$regex = '~
		# Match Youtube link and embed code
		(?:				 # Group to match embed codes
		   (?:<iframe [^>]*src=")?	 # If iframe match up to first quote of src
		   |(?:				 # Group to match if older embed
		      (?:<object .*>)?		 # Match opening Object tag
		      (?:<param .*</param>)*     # Match all param tags
		      (?:<embed [^>]*src=")?     # Match embed tag to the first quote of src
		   )?				 # End older embed code group
		)?				 # End embed code groups
		(?:				 # Group youtube url
		   https?:\/\/		         # Either http or https
		   (?:[\w]+\.)*		         # Optional subdomains
		   (?:               	         # Group host alternatives.
		       youtu\.be/      	         # Either youtu.be,
		       | youtube\.com		 # or youtube.com
		       | youtube-nocookie\.com	 # or youtube-nocookie.com
		   )				 # End Host Group
		   (?:\S*[^\w\-\s])?       	 # Extra stuff up to VIDEO_ID
		   ([\w\-]{11})		         # $1: VIDEO_ID is numeric
		   [^\s]*			 # Not a space
		)				 # End group
		"?				 # Match end quote if part of src
		(?:[^>]*>)?			 # Match any extra stuff up to close brace
		(?:				 # Group to match last embed code
		   </iframe>		         # Match the end of the iframe
		   |</embed></object>	         # or Match the end of the older embed
		)?				 # End Group of last bit of embed code
		~ix';

		preg_match( $regex, $url, $matches );

		return $matches[1];
	}
    public static function getVideoThumbnailByUrl($url, $format = 'small'){
		if(strpos($url, 'youtube'))
		{
			$id = BX_Helper::getYoutubeId($url);
	        if ('medium' === $format) {
	            return 'https://img.youtube.com/vi/' . $id . '/hqdefault.jpg';
	        }
	        return 'https://img.youtube.com/vi/' . $id . '/default.jpg';

		}
		elseif(strpos($url, 'vimeo'))
		{
			$id = BX_Helper::getVimeoId($url);
	        $hash = unserialize(BX_Helper::cURL("http://vimeo.com/api/v2/video/$id.php"));
	        /**
	         * thumbnail_small
	         * thumbnail_medium
	         * thumbnail_large
	         */
	        return $hash[0]['thumbnail_large'];

		}
		elseif(strpos($url, 'dailymotion'))
		{
			$url = str_replace('?autoPlay=1', '/', $url);
			return 'https:'.str_replace('embed', 'thumbnail', $url);
		}
	    return false;
	}
	
    public static function getVideoLocation($url) {
		if(strpos($url, 'youtube')) {
			$id = BX_Helper::getYoutubeId($url);
			return 'https://www.youtube.com/embed/' . $id;
		} elseif(strpos($url, 'vimeo')) {
			$id = BX_Helper::getVimeoId($url);
			return 'https://player.vimeo.com/video/' . $id;
		} elseif(strpos($url, 'dailymotion')) {
			$id = BX_Helper::getDailyMotionId($url);
			return 'https://www.dailymotion.com/embed/video/' . $id;
		}
	    return false;
	}
	
    public static function timeAgo($time) {
        $diff = time() - $time;
        if ($diff < 1) {
            return bxrlang('less than 1 second ago');
        }
        $_obfuscated_0D243906191912033C0D092D2D3C073E1E24181E1D0B32_ = array(
			'31536000' => 'year', 
			'2592000' => 'month', 
			'86400' => 'day', 
			'3600' => 'hour', 
			'60' => 'minute', 
			'1' => 'second'
		);
        $label = array(
			'year' => bxrlang('year ago'), 
			'month' => bxrlang('month ago'), 
			'day' => bxrlang('day ago'), 
			'hour' => bxrlang('hour ago'),
			'minute' => bxrlang('minute ago'), 
			'second' => bxrlang('second ago')
		);
        $labels = array(
			'year' => bxrlang('years ago'), 
			'month' => bxrlang('months ago'), 
			'day' => bxrlang('days ago'), 
			'hour' => bxrlang('hours ago'), 
			'minute' => bxrlang('minutes ago'), 
			'second' => bxrlang('seconds ago')
		);
        foreach ($_obfuscated_0D243906191912033C0D092D2D3C073E1E24181E1D0B32_ as $_obfuscated_0D1B1D2E020D1E32241B303138390B29051D181C172932_ => $_obfuscated_0D193622181F23373C2F1F11392639333E212A26362D11_) {
            $_obfuscated_0D0430230214020B2239340A381907302E04071E120101_ = $diff / $_obfuscated_0D1B1D2E020D1E32241B303138390B29051D181C172932_;
            if (1 <= $_obfuscated_0D0430230214020B2239340A381907302E04071E120101_) {
                $_obfuscated_0D1B080C072117252D40311F34222A3E0F0F0E023D3001_ = round($_obfuscated_0D0430230214020B2239340A381907302E04071E120101_);
                $timeAgo = 1 < $_obfuscated_0D1B080C072117252D40311F34222A3E0F0F0E023D3001_ ? $_obfuscated_0D1B080C072117252D40311F34222A3E0F0F0E023D3001_ . ' ' . $labels[$_obfuscated_0D193622181F23373C2F1F11392639333E212A26362D11_] : $_obfuscated_0D1B080C072117252D40311F34222A3E0F0F0E023D3001_ . ' ' . $label[$_obfuscated_0D193622181F23373C2F1F11392639333E212A26362D11_];
                return $timeAgo;
            }
        }
    }
	
	public static function timeElapsedString($ptime){
		$diff = time() - $ptime;
		$calc_times = array();
		$timeleft   = array();

		// Prepare array, depending on the output we want to get.
		$calc_times[] = array('Year',   'Years',   31557600);
		$calc_times[] = array('Month',  'Months',  2592000);
		$calc_times[] = array('Day',    'Days',    86400);
		$calc_times[] = array('Hour',   'Hours',   3600);
		$calc_times[] = array('Minute', 'Minutes', 60);
		$calc_times[] = array('Second', 'Seconds', 1);

		foreach ($calc_times AS $timedata){
			list($time_sing, $time_plur, $offset) = $timedata;

			if ($diff >= $offset){
				$left = floor($diff / $offset);
				$diff -= ($left * $offset);
				$timeleft[] = "{$left} " . ($left == 1 ? $time_sing : $time_plur);
			}
		}

		return $timeleft ? (time() > $ptime ? null : '-') . implode(' ', $timeleft) : 0;
	}
	
    public static function cURL($url, int $timeout = 30) {
        $ch = curl_init($url);
        $head = [
            "Connection: keep-alive",
            "Keep-Alive: 300",
            "Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7",
            "Accept-Language: en-us,en;q=0.5"
        ];
        curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1");
        curl_setopt($ch, CURLOPT_ENCODING, "gzip");
        curl_setopt($ch, CURLOPT_HTTPHEADER, $head);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
        curl_setopt($ch, CURLOPT_TIMEOUT, $timeout);
        
        // Performance optimizations
        curl_setopt($ch, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4);
        curl_setopt($ch, CURLOPT_DNS_CACHE_TIMEOUT, 300);
        curl_setopt($ch, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_2_0);
        curl_setopt($ch, CURLOPT_TCP_NODELAY, 1);
        
        $page = curl_exec($ch);
        curl_close($ch);
        return $page ?: '';
    }
    
	public static function get_ip() {
        $headers = function_exists('apache_request_headers') ? apache_request_headers() : $_SERVER;
        if (isset($headers['X-Forwarded-For']) && filter_var($headers['X-Forwarded-For'], FILTER_VALIDATE_IP, FILTER_FLAG_IPV4)) {
            return $headers['X-Forwarded-For'];
        } elseif (isset($headers['HTTP_X_FORWARDED_FOR']) && filter_var($headers['HTTP_X_FORWARDED_FOR'], FILTER_VALIDATE_IP, FILTER_FLAG_IPV4)) {
            return $headers['HTTP_X_FORWARDED_FOR'];
        }
        return filter_var($_SERVER['REMOTE_ADDR'], FILTER_VALIDATE_IP, FILTER_FLAG_IPV4);
    }
}
