window.addEventListener('scroll', function() {
    document.getElementById('showScroll').innerHTML = window.pageYOffset + 'px';
  });


window.onscroll = function() {
    if ((window.pageYOffset) >= 800) {
        document.getElementById("pic1").style.opacity = "1"; 
    } else {
        document.getElementById("pic1").style.opacity = "0"; 
    }
}