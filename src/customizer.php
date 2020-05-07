<?php
/**
 * Adds settings to the customizer
 */
class TPD_Customizer {
  public static function register ($wp_customize) {
    /**
     * Site Identity
     */
    $wp_customize->selective_refresh->add_partial('blogname', [
      'selector' => '.site-title',
      'render_callback' => function () {
        tpd_the_title_or_logo();
      }
    ]);

    $wp_customize->selective_refresh->add_partial('custom_logo', [
      'render_callback' => function () {
        tpd_the_title_or_logo();
      }
    ]);

    $wp_customize->selective_refresh->add_partial('source_code_flair', [
      'render_callback' => function () {
        tpd_sourcecode_flair();
      }
    ]);

    /**
     * Site Identity
     */
    // Sourcecode flair
    $wp_customize->add_setting('tpd_sourcecode_flair', [
      'default' => '',
      'type' => 'theme_mod',
      'capaibility' => 'edit_theme_options',
      'transport' => 'postMessage'
    ]);

    $wp_customize->add_control('tpd_sourcecode_flair', [
      'settings' => 'tpd_sourcecode_flair',
      'label' => 'Sourcecode Flair',
      'description' => 'Adds a custom comment to the top of your sourcecode. Great for adding ASCII art and messages to developers!',
      'section' => 'title_tagline',
      'type' => 'textarea',
      'priority' => 100
    ]);
    
    /**
     * Navbar
     */
    $wp_customize->add_section('tpd_navbar', [
      'title' => 'Navbar',
      'capability' => 'edit_theme_options',
      'priority' => 30
    ]);
    
    // Callout
    $wp_customize->add_setting('tpd_navbar_callout_label', [
      'default' => '',
      'type' => 'theme_mod',
      'capability' => 'edit_theme_options',
      'transport' => 'postMessage'
    ]);

    $wp_customize->add_control('tpd_navbar_callout_label', [
      'label' => 'Callout Label (appears to the right of the menu)',
      'section' => 'tpd_navbar',
      'type' => 'text',
      'settings' => 'tpd_navbar_callout_label'
    ]);

    // Callout link
    $wp_customize->add_setting('tpd_navbar_callout_link', [
      'default' => '',
      'type' => 'theme_mod',
      'capability' => 'edit_theme_options',
      'transport' => 'postMessage'
    ]);

    $wp_customize->add_control('tpd_navbar_callout_link', [
      'label' => 'Callout Link',
      'section' => 'tpd_navbar',
      'type' => 'text',
      'settings' => 'tpd_navbar_callout_link'
    ]);

    // Callout partial
    $wp_customize->selective_refresh->add_partial('tpd_navbar_callout_label', [
      'selector' => '.navbar-callout',
      'container_inclusive' => true,
      'render_callback' => function () {
        tpd_the_navbar_callout();
      }
    ]);
  }
}
add_action('customize_register', ['TPD_Customizer', 'register']);