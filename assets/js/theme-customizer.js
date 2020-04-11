(($, wp) => {
  /**
   * Live edit the navbar callout
   */
  wp.customize('tpd_navbar_callout_label', (val) => {
    val.bind(newVal => {
      $('.navbar-callout').text(newVal)
    })
  })
  wp.customize('tpd_navbar_callout_link', (val) => {
    val.bind(newVal => {
      $('.navbar-callout').attr('href', newVal)
    })
  })
})(window.jQuery, window.wp)