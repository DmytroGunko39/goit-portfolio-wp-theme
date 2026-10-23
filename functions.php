<?php
if (!defined('ABSPATH')) exit;

// Define constants
if (!defined('_VERSION')) {
	define('_VERSION', '1.0.2');
}

//Optimization 
require get_template_directory() . '/inc/_optimization.php';

// Include styles, scripts and theme support
require get_template_directory() . '/inc/_scripts.php';

// Post types
require get_template_directory() . '/inc/_post-types.php';

//Register menus
require get_template_directory() . '/inc/_menus.php';

// Register ACF blocks
require get_template_directory() . '/inc/_acf.php';

// Register blocks
require get_template_directory() . '/inc/_blocks.php';

// ACF options pages (Footer settings)
require get_template_directory() . '/inc/_acf-options.php';

/**
 * Практика: хук CF7 перед відправкою листа.
 */
add_action('wpcf7_before_send_mail', 'goit_cf7_before_send', 10, 3);

function goit_cf7_before_send($contact_form, &$abort, $submission)
{
	$data  = $submission->get_posted_data();
	$topic = isset($data['your-topic']) ? $data['your-topic'] : '';
	if (is_array($topic)) {
		$topic = reset($topic); // беремо перше значення з масиву
	}

	// 1. Зупиняємо відправку за умовою: у повідомленні є посилання (простий антиспам)
	$message = isset($data['your-message']) ? $data['your-message'] : '';
	if (preg_match('#https?://#i', $message)) {
		$abort = true;
		$submission->set_status('aborted');
		$submission->set_response('Links are not allowed in the message.');
		return;
	}

	// 2. Змінюємо лист залежно від теми
	$mail = $contact_form->prop('mail');

	if ('Collaboration' === $topic) {
		$mail['recipient'] = get_option('admin_email');
		$mail['subject']   = '[COLLAB] [your-topic] from [your-name]';
	} elseif ('Question' === $topic) {
		$mail['subject'] = '[QUESTION] [your-topic] from [your-name]';
	}

	$contact_form->set_properties(array('mail' => $mail));
}
