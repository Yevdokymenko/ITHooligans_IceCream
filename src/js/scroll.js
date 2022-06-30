var scroll_distance = 100;
var transparent = true;
document.addEventListener('scroll', function () {
  if ($(document).scrollTop() > scroll_distance) {
    if (transparent) {
      transparent = false;
      $('header').addClass('changeColor');
    }
  } else {
    if (!transparent) {
      transparent = true;
      $('header').removeClass('changeColor');
    }
  }
});
