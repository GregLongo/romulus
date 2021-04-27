<?php
/**
* Template Name: Home Page
* Description: Landing Page for Dovetail Dojo
*/


$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;
Timber::render( 'homepage.twig' , $context );
$timberContext['options'] = get_fields('options');
