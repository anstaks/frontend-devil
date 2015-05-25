$( document ).ready(function() {
  var crossplatformID

  $('.b-cross-platform-devices-link').click(function (e) {
    e.preventDefault()
    go_next(this, {target_active: "b-cross-platform-target-active", link_active: "b-cross-platform-devices-link-active"})
    clearTimeout(crossplatformID)
    crossplatformID = setTimeout(crossplatformInterval, 6000)
  })

  function crossplatformInterval() {
    var next = $('.b-cross-platform-devices-link-active').next()
    var next_item = (next.length > 0 ? next : $('.b-cross-platform-devices-link')[0])
    go_next(next_item, {target_active: "b-cross-platform-target-active", link_active: "b-cross-platform-devices-link-active"});
    crossplatformID = setTimeout(crossplatformInterval, 4000)
  }

  crossplatformID = setTimeout(crossplatformInterval, 4000)
});
