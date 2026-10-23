<?php
$we_title = get_field('we_title');
$we_description = get_field('we_description');
?>

<section id="home-work-experience" class="work-experience">
  <div class="container">

    <?php if ($we_title) : ?>
      <h2 class="work-experience__title"><?php echo esc_html($we_title); ?></h2>
    <?php endif; ?>

    <?php if ($we_description) : ?>
      <p class="work-experience__description"><?php echo esc_html($we_description); ?></p>
    <?php endif; ?>

    <?php if (have_rows('we_items')) : ?>
      <ul class="work-experience__list">
        <?php while (have_rows('we_items')) : the_row(); ?>
          <?php
          $company = get_sub_field('company');
          $period = get_sub_field('period');
          $position = get_sub_field('position');
          $description = get_sub_field('description');
          ?>
          <li class="work-experience__item">
            <div class="work-experience__meta">
              <?php if ($company) : ?>
                <h3 class="work-experience__company"><?php echo esc_html($company); ?></h3>
              <?php endif; ?>
              <?php if ($period) : ?>
                <p class="work-experience__period"><?php echo esc_html($period); ?></p>
              <?php endif; ?>
            </div>

            <div class="work-experience__content">
              <?php if ($position) : ?>
                <h4 class="work-experience__position"><?php echo esc_html($position); ?></h4>
              <?php endif; ?>
              <?php if ($description) : ?>
                <p class="work-experience__text"><?php echo esc_html($description); ?></p>
              <?php endif; ?>
            </div>
          </li>
        <?php endwhile; ?>
      </ul>
    <?php endif; ?>

  </div>
</section>