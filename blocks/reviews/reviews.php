<?php
$title    = get_field('title');
$subtitle = get_field('subtitle');
?>
<section class="reviews">
  <div class="reviews__container">

    <header class="reviews__header">
      <?php if ($title) : ?>
        <h2 class="reviews__title"><?php echo esc_html($title); ?></h2>
      <?php endif; ?>
      <?php if ($subtitle) : ?>
        <p class="reviews__text"><?php echo esc_html($subtitle); ?></p>
      <?php endif; ?>
    </header>

    <?php if (have_rows('reviews')) : ?>
      <div class="reviews__slider">
        <button class="reviews__arrow reviews__arrow--prev" type="button" aria-label="Previous review">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>

        <div class="reviews__track swiper">
          <div class="swiper-wrapper">
            <?php while (have_rows('reviews')) : the_row();
              $quote  = get_sub_field('quote');
              $name   = get_sub_field('name');
              $role   = get_sub_field('role');
              $avatar = get_sub_field('avatar');
            ?>
              <article class="reviews__card swiper-slide">
                <blockquote class="reviews__quote">“<?php echo esc_html($quote); ?>”</blockquote>
                <div class="reviews__author">
                  <?php if ($avatar) : ?>
                    <?php echo wp_get_attachment_image($avatar, 'thumbnail', false, array('class' => 'reviews__avatar')); ?>
                  <?php else : ?>
                    <span class="reviews__avatar"></span>
                  <?php endif; ?>
                  <span class="reviews__name"><?php echo esc_html($name); ?></span>
                  <?php if ($role) : ?>
                    <span class="reviews__role">• <?php echo esc_html($role); ?></span>
                  <?php endif; ?>
                </div>
              </article>
            <?php endwhile; ?>
          </div>
        </div>

        <button class="reviews__arrow reviews__arrow--next" type="button" aria-label="Next review">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    <?php endif; ?>

  </div>
</section>