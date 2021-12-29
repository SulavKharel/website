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
