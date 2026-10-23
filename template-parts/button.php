<?php

/**
 * Спільна кнопка.
 *
 * Параметри ($args):
 *   link    — масив ACF Link (url, title, target)
 *   variant — primary | secondary | white (за замовчуванням primary)
 *   icon    — chat | '' (за замовчуванням без іконки)
 */
$link    = $args['link'] ?? array();
$variant = $args['variant'] ?? 'primary';
$icon    = $args['icon'] ?? '';

if (empty($link['url'])) {
  return;
}

$is_blank = !empty($link['target']) && $link['target'] === '_blank';
?>

<a href="<?php echo esc_url($link['url']); ?>" class="btn btn--<?php echo esc_attr($variant); ?>" <?php echo $is_blank ? ' target="_blank" rel="noopener"' : ''; ?>>
  <?php echo esc_html($link['title']); ?>

  <?php if ($icon === 'chat') : ?>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M8 10H8.01M12 10H12.01M16 10H16.01M9 16H5C3.89543 16 3 15.1046 3 14V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V14C21 15.1046 20.1046 16 19 16H14L9 21V16Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  <?php endif; ?>
</a>