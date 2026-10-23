<?php
if (!defined('ABSPATH')) exit;

// Сторінка налаштувань сайту в адмінці (меню "Footer")
if (function_exists('acf_add_options_page')) {
  acf_add_options_page([
    'page_title' => 'Footer settings',
    'menu_title' => 'Footer',
    'menu_slug'  => 'footer-settings',
    'capability' => 'edit_posts',
    'icon_url'   => 'dashicons-admin-links',
    'redirect'   => false,
  ]);
}
