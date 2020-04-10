<!DOCTYPE html>
<html <?php language_attributes() ?>>
<head>
  <meta charset="<?php bloginfo('charset') ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" >

  <?php wp_head() ?>
</head>
<body <?php body_class() ?>>
  <?php wp_body_open() ?>

  <header class="container row">
    <div class="col-xs site-title">
      <?php the_title_or_logo() ?>
    </div>
    <div class="col-xs">
      Menu Block
    </div>
  </header>