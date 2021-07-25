<?php

$context         = Timber::context();
$timber_post     = Timber::get_post();
$context['post'] = $timber_post;

$popular_posts_args = array(
   'posts_per_page' => 6,
   'order'=> 'DESC'
);

$recent_posts_loop = Timber::get_posts($popular_posts_args);

$context ['allposts'] =$recent_posts_loop;

Timber::render( 'blog.twig', $context );
