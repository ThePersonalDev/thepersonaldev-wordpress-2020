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
      <?php tcp_the_title_or_logo() ?>
    </div>
    <div class="col-xs">
      <div class="row">
        <div class="menu-main">
          Menu Block
        </div>
        <?php tcp_the_navbar_callout() ?>
      </div>
    </div>
  </header>