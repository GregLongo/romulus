<?php
/**
* Template Name: Home Page
* Description: Landing Page for Sentant
*/


$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;

//query recent posts
$recent_posts_args = array(
   'posts_per_page' => 4,
   'order'=> 'DESC'
);
$recent_posts_loop = Timber::get_posts($recent_posts_args);
$context ['recentposts'] =$recent_posts_loop;


Timber::render( 'homepage.twig' , $context );
$timberContext['options'] = get_fields('options');
