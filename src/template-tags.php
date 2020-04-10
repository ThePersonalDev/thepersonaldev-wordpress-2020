<?php
/**
 * Outputs either a linked site title or logo
 */
function the_title_or_logo() {
  $theme_logo = get_theme_mod( 'custom_logo' );

  ?>
    <a href="<?= get_home_url() ?>" class="color-1">
      <?php if ($theme_logo): ?>
        <img src="<?= $theme_logo ?>">
      <?php else: ?>
        <?php bloginfo('name') ?>
      <?php endif ?>
    </a>
  <?php

}