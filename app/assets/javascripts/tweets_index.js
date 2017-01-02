$(document).ready(function() {
  $('.info').hide()
  $('.toggle-button').click(function(event) {
    console.log('Hello World!')
    $(this).siblings('.info').toggle()
  })
})
