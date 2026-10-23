<?php get_header(); ?>

<section class="container py-5">
  <div class="row">
    <div class="col-12 mb-4">
      <h1><?php _e('My Projects', 'goit'); ?></h1>
    </div>

    <?php if (have_posts()) : ?>
      <?php while (have_posts()) : the_post(); ?>
        <div class="col-md-6 col-lg-4 mb-4">
          <?php get_template_part('template-parts/project-card'); ?>
        </div>
      <?php endwhile; ?>
    <?php else : ?>
      <div class="col-12">
        <p><?php _e('No projects yet.', 'goit'); ?></p>
      </div>
    <?php endif; ?>
  </div>
</section>

<?php get_footer(); ?>