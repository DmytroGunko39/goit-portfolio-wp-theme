<?php

function head_cleanup()
{
  // Remove unnecessary meta tags from the head section
  remove_action('wp_head', 'rsd_link'); // Remove Really Simple Discovery link
  remove_action('wp_head', 'wlwmanifest_link'); // Remove Windows Live Writer manifest link
  remove_action('wp_head', 'wp_generator'); // Remove WordPress version generator meta tag
  remove_action('wp_head', 'feed_links', 2); // Remove RSS feed links
  remove_action('wp_head', 'feed_links_extra', 3); // Remove extra RSS feed links
  remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10); // Remove adjacent posts links

  // Remove emoji scripts and styles
  remove_action('wp_head', 'print_emoji_detection_script', 7);
  remove_action('wp_enqueue_scripts', 'wp_enqueue_emoji_styles');
  add_filter('emoji_svg_url',         '__return_false');                  // drops s.w.org dns-prefetch
}
add_action('init', 'head_cleanup');
