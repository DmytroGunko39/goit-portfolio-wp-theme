<?php
$post_id    = get_the_ID();
$github_url = get_field('github_url', $post_id);
$live_url   = get_field('live_url', $post_id);
$stack      = get_field('stack', $post_id);
?>
<article class="project-card">

  <?php if (has_post_thumbnail()) : ?>
    <a class="project-card__image" href="<?php the_permalink(); ?>">
      <?php the_post_thumbnail('medium_large'); ?>
    </a>
  <?php endif; ?>

  <div class="project-card__body">
    <?php if ($stack) : ?>
      <p class="project-card__stack"><?php echo esc_html($stack); ?></p>
    <?php endif; ?>

    <h2 class="project-card__title">
      <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
    </h2>

    <div class="project-card__excerpt"><?php the_excerpt(); ?></div>

    <?php if ($github_url || $live_url) : ?>
      <div class="project-card__links">
        <?php if ($github_url) : ?>
          <a class="btn btn--secondary" href="<?php echo esc_url($github_url); ?>" target="_blank" rel="noopener">GitHub</a>
        <?php endif; ?>
        <?php if ($live_url) : ?>
          <a class="btn btn--primary" href="<?php echo esc_url($live_url); ?>" target="_blank" rel="noopener">Live</a>
        <?php endif; ?>
      </div>
    <?php endif; ?>
  </div>

</article>