<?php
//Register menus
function register_menu()
{
  register_nav_menus([
      'header_menu' => 'Header Menu',
      'footer_menu' => 'Footer Menu'
  ]);
}
add_action('after_setup_theme', 'register_menu');
