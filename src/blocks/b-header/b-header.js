$(function () {
  $(window).bind('scroll', function() {
    if ($(window).scrollTop() > 0) {
      $('body').addClass('sticky-b-header');
    } else {
      $('body').removeClass('sticky-b-header');
    }
  });
})
