<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * To generate specific templates for your pages you can use:
 * /mytheme/templates/page-mypage.twig
 * (which will still route through this PHP file)
 * OR
 * /mytheme/page-mypage.php
 * (in which case you'll want to duplicate this file and save to the above path)
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context = Timber::context();

$timber_post     = new Timber\Post();


$context['post'] = $timber_post;

//query top posts
$popular_posts_args = array(
   'posts_per_page' => 5,
   'meta_key' => 'my_post_viewed',
   'orderby' => 'meta_value_num',
   'order'=> 'DESC'
);

$popular_posts_loop = Timber::get_posts($popular_posts_args);

$context ['topposts'] =$popular_posts_loop;

//query recent posts
$recent_posts_args = array(
   'posts_per_page' => 8,
   'order'=> 'DESC'
);
$recent_posts_loop = Timber::get_posts($recent_posts_args);
$context ['recentposts'] =$recent_posts_loop;

//query all posts
$all_posts_args = array(
   'order'=> 'DESC'
);
$all_posts_loop = Timber::get_posts($all_posts_args);
$context ['allposts'] =$all_posts_loop;


Timber::render( array( 'page-' . $timber_post->post_name . '.twig', 'page.twig' ), $context );
