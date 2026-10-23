<?php

add_action('acf/init', 'register_blocks');

function register_blocks()
{
  if (function_exists('acf_register_block_type')) {
    acf_register_block_type(array(
      'name'              => 'hero',
      'title'             => __('Hero'),
      'description'       => __('A custom hero block.'),
      'render_template'   => get_template_directory() . '/blocks/home-page/hero.php',
      'category'          => 'goit-blocks',
      'icon'              => 'admin-generic',
      'enqueue_style'     => get_template_directory_uri() . '/assets/scss/app.min.css',
      'keywords'          => array('hero', 'hero block'),
    ));

    acf_register_block_type(array(
      'name'              => 'work-experience',
      'title'             => __('Work Experience'),
      'description'       => __('A work experience timeline block.'),
      'render_template'   => get_template_directory() . '/blocks/work-experience/work-experience.php',
      'category'          => 'goit-blocks',
      'icon'              => 'backup',
      'enqueue_style'     => get_template_directory_uri() . '/assets/scss/app.min.css',
      'keywords'          => array('work', 'experience', 'timeline'),
    ));

    acf_register_block_type(array(
      'name'            => 'latest-work',
      'title'           => __('My Latest Work'),
      'description'       => __('A block showing the latest projects.', 'goit'),
      'render_template'   => get_template_directory() . '/blocks/latest-work/latest-work.php',
      'category'          => 'goit-blocks',
      'icon'              => 'portfolio',
      'enqueue_style'     => get_template_directory_uri() . '/assets/scss/app.min.css',
      'keywords'          => array('work', 'projects', 'portfolio'),
    ));

    acf_register_block_type(array(
      'name'              => 'reviews',
      'title'             => __('Reviews'),
      'description'       => __('A testimonials slider block.', 'goit'),
      'render_template'   => get_template_directory() . '/blocks/reviews/reviews.php',
      'category'          => 'goit-blocks',
      'icon'              => 'format-quote',
      'enqueue_style'     => get_template_directory_uri() . '/assets/scss/app.min.css',
      'enqueue_assets'    => function () {
        wp_enqueue_style('swiper', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css', array(), '11');
        wp_enqueue_script('swiper', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', array(), '11', true);
        wp_enqueue_script('reviews', get_template_directory_uri() . '/blocks/reviews/reviews.js', array('swiper'), '1.0', true);
      },
      'keywords'          => array('reviews', 'testimonials', 'slider'),
    ));

    acf_register_block_type(array(
      'name'            => 'cta',
      'title'           => __('Call To Action'),
      'description'     => __('A call to action block with a title, text and a button.', 'goit'),
      'render_template' => get_template_directory() . '/blocks/cta/cta.php',
      'category'        => 'goit-blocks',
      'icon'            => 'megaphone',
      'enqueue_style'   => get_template_directory_uri() . '/assets/scss/app.min.css',
      'keywords'        => array('cta', 'contact', 'call to action'),
    ));
  }
}
