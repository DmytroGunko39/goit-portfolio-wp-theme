<?php
$lw_title       = get_field('lw_title');
$lw_description = get_field('lw_description');
$lw_link        = get_field('lw_link'); // ACF Link, return format: Array

$projects = new WP_Query([
  'post_type'      => 'project',
  'posts_per_page' => 3,
]);
?>

<section id="home-latest-work" class="latest-work">
  <div class="container">
    <div class="latest-work__header">
      <div class="latest-work__top">
        <?php if ($lw_title) : ?>
          <h2 class="latest-work__title"><?php echo esc_html($lw_title); ?></h2>
        <?php endif; ?>

        <?php if ($lw_link) : ?>
          <a class="latest-work__link" href="<?php echo esc_url($lw_link['url']); ?>"
            <?php if (!empty($lw_link['target'])) : ?>target="<?php echo esc_attr($lw_link['target']); ?>" <?php endif; ?>>
            <?php echo esc_html($lw_link['title']); ?> &rarr;
          </a>
        <?php endif; ?>
      </div>

      <?php if ($lw_description) : ?>
        <p class="latest-work__description"><?php echo esc_html($lw_description); ?></p>
      <?php endif; ?>
    </div>

    <?php if ($projects->have_posts()) : ?>
      <div class="latest-work__grid">
        <?php while ($projects->have_posts()) : $projects->the_post(); ?>
          <?php get_template_part('template-parts/project-card'); ?>
        <?php endwhile; ?>
      </div>
      <?php wp_reset_postdata(); ?>
    <?php else : ?>
      <p class="latest-work__empty"><?php _e('No projects yet.', 'goit'); ?></p>
    <?php endif; ?>

  </div>
</section>