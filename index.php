<?php 
/**
 * Plugin Name: Carousel PETA Test
 * Description: gutenberg carousel
 * Author: Ryan Antcliff
 */

 function carousel_setup(){
    $asset_file = include(plugin_dir_path(__FILE__) . 'build/index.asset.php');

      //register script so block can be seen
      wp_register_script(
        'carousel-block-js',
        plugins_url('build/index.js', __FILE__),
        $asset_file['dependencies'],
        $asset_file['version']

    );

    wp_register_style(
        'carousel-block-style',
        plugins_url('/build/editorStyle.css', __FILE__),
		    array('wp-edit-blocks')
    );

    register_block_type('peta/carousel', [
		'editor_script' => 'carousel-block-js',
		'editor_style' => 'carousel-block-style',
	]);

 }

 add_action('init', 'carousel_setup');


 function slider_script(){
    wp_enqueue_script('bxSlider', 'https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.min.js', null, ['jquery'], null, true);

 }
 add_action('wp_enqueue_scripts', 'slider_script');
