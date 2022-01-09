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


  $(document).ready(function () {
    $(".card-title").hover(function () {
      $(this).toggleClass("animate__animated animate__pulse animate__slow");
    });
  });

  // $(document).ready(function(){
  //   $(".wish-icon i").click(function(){
  //     $(this).toggleClass("fa-heart fa-heart-o");
  //   });
  // });
