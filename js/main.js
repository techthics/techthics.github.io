// Add .is-clicked when clicked.
$('#ham-menu').click(function() {
  $('.line-1, .line-2, .line-3').toggleClass('is-clicked');
  $('#site-canvas').toggleClass('move-left show');
  $('#site-menu-right').toggleClass('hide-menu show-menu');
});



$('.parallax').parallax({
      imageSrc: 'http://www.allwhitebackground.com/images/2/2278-190x190.jpg'
    });