$(document).ready(function(){ 
    $(window).scroll(function(){ 
        $('pictures').css("opacity", 1- $(window).scrollTop() / 700) 
    }) 
}) 