var $video = $("#b-intro-video__movie"),
    $button = $("#b-intro-video__controls-play"),
    $intro = $('#b-intro-video');

$button.click(function (e) {
  console.log('123')
  if (!$video[0].paused) {
    $video[0].pause();
    $intro.addClass("b-intro-video--paused")
  } else {
    $video[0].play();
    $intro.removeClass("b-intro-video--paused")
  }
})

$video[0].onended = function(e) {
  $intro.addClass("b-intro-video--paused")
};
