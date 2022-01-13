window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var navbar1 = document.getElementById("navbar1");
var sticky= navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky-top");
  } else {
    navbar.classList.remove("sticky-top");
  }
}

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-lewagon");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

var textDark = document.getElementById("text-dark");

$(document).ready(function(){
        var scroll_pos = 0;
        $(document).scroll(function() {
            scroll_pos = $(this).scrollTop();
            if(scroll_pos > 100) {
                $('.nav-link1').css('color', '#000');
            } else {
                $('.nav-link1').css('color', '#fff');
            }
        });
    });
