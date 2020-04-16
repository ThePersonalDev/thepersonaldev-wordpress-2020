<?php

add_action('init', function () {
  $assets = include(get_template_directory() . '/dist/js/blocks/icon-callout.asset.php');

  wp_register_script(
    'tpd-blocks-icon-callout',
    get_stylesheet_directory_uri() . '/dist/js/blocks/icon-callout.js',
    $assets['dependencies'],
    $assets['version']
  );

  register_block_type('tpd/icon-callout', [
    'editor_script' => 'tpd-blocks-icon-callout'
  ]);
});