window.addEventListener('scroll', function () {
  document.getElementById('showScroll').innerHTML = window.pageYOffset + 'px';
});


window.onscroll = function () {
  if ((window.pageYOffset) >= 1900) {
    document.getElementById("pic1").style.opacity = "1";
    if ((window.pageYOffset) >= 3000) {
      document.getElementById("video1").style.opacity = "1";
    }
      if ((window.pageYOffset) >= 3500) {
        document.getElementById("pic2").style.opacity = "1";
      }

  }  
  else {
    document.getElementById("pic1").style.opacity = "0";
    document.getElementById("video1").style.opacity = "0";
    document.getElementById("pic2").style.opacity = "0";
  }
}




// Load this when the DOM is ready
$(function () {
  // You used .myCarousel here. 
  // That's the class selector not the id selector,
  // which is #myCarousel
  $('#myCarousel').carousel();
});



