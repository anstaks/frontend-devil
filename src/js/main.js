//= ../vendor/jquery/jquery-2.1.4.min.js
//= ../vendor/bootstrap/bootstrap.js

function go_next(elem, classes) {
  var id = $(elem).data('target')
  $(id).addClass(classes.target_active).siblings().removeClass(classes.target_active);
  $(elem).addClass(classes.link_active).siblings().removeClass(classes.link_active)
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//= ../blocks/b-intro-video/b-intro-video.js
//= ../blocks/b-infographic/b-infographic.js
//= ../blocks/b-cross-platform/b-cross-platform.js
//= ../blocks/b-header/b-header.js

