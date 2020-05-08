<?php
get_header(); ?>
  <main class="container">
    <?php if (have_posts()):
      while (have_posts()) : the_post(); ?>
        <header class="post-header">
          <h1 class="post-title"><?= the_title() ?></h1>
          <?php if (has_excerpt()): ?>
            <div class="post-excerpt"><?= the_excerpt() ?></div>
          <?php endif ?>
        </header>
      
        <div class="post-content">
          <?php the_content(); ?>
        </div>
      <?php endwhile;
    endif; ?>
  </main>
<?php get_footer();