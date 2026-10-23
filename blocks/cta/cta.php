<?php
$cta_title  = get_field('cta_title');
$cta_text   = get_field('cta_text');
$cta_button = get_field('cta_button') ?: array();
?>

<section class="cta">
  <div class="container">
    <div class="cta__inner">

      <?php if ($cta_title) : ?>
        <h2 class="cta__title"><?php echo esc_html($cta_title); ?></h2>
      <?php endif; ?>

      <?php if ($cta_text) : ?>
        <p class="cta__text"><?php echo esc_html($cta_text); ?></p>
      <?php endif; ?>

      <?php
      get_template_part('template-parts/button', null, array(
        'link'    => $cta_button,
        'variant' => 'white',
        'icon'    => 'chat',
      ));
      ?>

    </div>
  </div>
</section>