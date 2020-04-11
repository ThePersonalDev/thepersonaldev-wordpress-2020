<?php
/**
 * Adds settings to the customizer
 */
class TPD_Customizer {
  public static function register ($wp_customize) {
    /**
     * Navbar
     */
    $wp_customize->add_section('tpd_navbar', [
      'title' => 'Navbar',
      'capability' => 'edit_theme_options',
      'priority' => 30
    ]);

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
  }
}
add_action('customize_register', ['TPD_Customizer', 'register']);