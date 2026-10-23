<?php
// If this file is called directly, abort.
defined('ABSPATH') || exit;

// folder name of your block
$block = 'skill-section';

// Enqueue script (editor only)
add_action('enqueue_block_editor_assets', function () use ($block) {
	$script_file = get_template_directory() . "/blocks/$block/build/index.js";

	wp_enqueue_script(
		$block . '-script',
		get_template_directory_uri() . "/blocks/$block/build/index.js",
		// Dependencies array ( you can use only must-have dependencies )
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-editor',
			'wp-block-editor',
			'wp-components',
			'wp-data'
		),
		file_exists($script_file) ? filemtime($script_file) : false
	);
});

// Enqueue style (front end AND editor, including the iframe editor)
add_action('enqueue_block_assets', function () use ($block) {
	$style_file = get_template_directory() . "/blocks/$block/build/style.css";

	wp_enqueue_style(
		$block . '-style',
		get_template_directory_uri() . "/blocks/$block/build/style.css",
		[],
		file_exists($style_file) ? filemtime($style_file) : false
	);
});
