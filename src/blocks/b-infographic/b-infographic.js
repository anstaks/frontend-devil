$( document ).ready(function() {
  var infographicID

  $('.b-infographic-item').click(function (e) {
    e.preventDefault()
    go_next(this, {target_active: "b-infographic-big-contain-active", link_active: "b-infographic-item-active"})
    clearTimeout(infographicID)
    infographicID = setTimeout(infographicInterval, 8000)
  })

  function infographicInterval() {
    var next = $('.b-infographic-item-active').next()
    var next_item = (next.length > 0 ? next : $('.b-infographic-item')[0])
    go_next(next_item, {target_active: "b-infographic-big-contain-active", link_active: "b-infographic-item-active"});
    infographicID = setTimeout(infographicInterval, 5000)
  }

  infographicID = setTimeout(infographicInterval, 5000)
});
