<?php

if ( ! class_exists( 'Timber' ) ) {
	add_action( 'admin_notices', function() {
		echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url( admin_url( 'plugins.php#timber' ) ) . '">' . esc_url( admin_url( 'plugins.php') ) . '</a></p></div>';
	});

	add_filter('template_include', function($template) {
		return get_stylesheet_directory() . '/templates/no-timber.html';
	});

	return;
}

Timber::$dirname = array('templates', 'views');


class StarterSite extends Timber\Site {
	/** Add timber support. */
	function __construct() {
		add_theme_support( 'post-formats' );
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'menus' );
		add_theme_support( 'html5', array( 'comment-list', 'comment-form', 'search-form', 'gallery', 'caption' ) );
		add_theme_support('custom-logo');
		add_filter( 'timber_context', array( $this, 'add_to_context' ) );
		add_filter( 'get_twig', array( $this, 'add_to_twig' ) );
		add_action( 'init', array( $this, 'register_post_types' ) );
		add_action( 'init', array( $this, 'register_taxonomies' ) );
		parent::__construct();
	}

	function register_post_types() {
		//this is where you can register custom post types

	}

	function register_taxonomies() {
		//this is where you can register custom taxonomies
	}

	function add_to_context( $context ) {
 		$context['custom_logo_url'] = wp_get_attachment_image_url(get_theme_mod('custom_logo'), 'large');
 		$context['menu'] = new TimberMenu();
 		$context['site'] = $this;
 		return $context;
 	}

	function add_to_twig( $twig ) {
		/* this is where you can add your own functions to twig */
		$twig->addExtension( new Twig_Extension_StringLoader() );
		return $twig;
	}

}

new StarterSite();

//enqueue assets
function _moshe_assets() {
	wp_enqueue_style('app-css', get_template_directory_uri() . '/dist/css/app.css');
	wp_enqueue_script('app-js', get_template_directory_uri() . '/dist/js/app.js');
}
add_action( 'wp_enqueue_scripts', '_moshe_assets' );


//remove main text area from pages
add_action('admin_init', 'remove_textarea');

    function remove_textarea() {
            remove_post_type_support( 'page', 'editor' );
    }


//count post views


function count_post_visits() {
   if( is_single() ) {
      global $post;
      $views = get_post_meta( $post->ID, 'my_post_viewed', true );
      if( $views == '' ) {
         update_post_meta( $post->ID, 'my_post_viewed', '1' );
      } else {
         $views_no = intval( $views );
         update_post_meta( $post->ID, 'my_post_viewed', ++$views_no );
      }
   }
}
add_action( 'wp_head', 'count_post_visits' );


//limit excerpt

function get_excerpt(){
$excerpt = get_the_content();
$excerpt = preg_replace(" ([.*?])",'',$excerpt);
$excerpt = strip_shortcodes($excerpt);
$excerpt = strip_tags($excerpt);
$excerpt = substr($excerpt, 0, 30);
$excerpt = substr($excerpt, 0, strripos($excerpt, " "));
$excerpt = trim(preg_replace( '/\s+/', ' ', $excerpt));
$excerpt = $excerpt.'... <a href="'.get_the_permalink().'">more</a>';
return $excerpt;
}

// calendly

wp_register_script('calendly', 'https://assets.calendly.com/assets/external/widget.js');
wp_enqueue_script('calendly' , 'async');

//analytics (dummy tracker)
function add_analytics(){ ?>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-QB1ZZMYMP1"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'G-QB1ZZMYMP1');
	</script>
	<?php }
add_action('wp_head', 'add_analytics');

//acf options page
if( function_exists('acf_add_options_page') ) {

	acf_add_options_page();

};

add_filter( 'timber_context', 'moshe_timber_context'  );

function moshe_timber_context( $context ) {
    $context['options'] = get_fields('option');
    return $context;
}

//fontawesome (deprecated?)

// function load_icons() {
// 	wp_enqueue_style(
// 		'font-awesome-5',
// 		'https://use.fontawesome.com/releases/v5.15.3/css/all.css',
// 		array(),
// 		'5.15.3'
// 	);
// }
//
// add_action('wp_enqueue_scripts', 'load_icons');
