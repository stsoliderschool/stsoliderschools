﻿
/*=============================================================
    Authour URI: www.binarytheme.com
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% Free To use For Personal And Commercial Use.
    IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US
   
    ========================================================  */

(function ($) {
    "use strict";
    var mainApp = {
        scrollAnimation_fun: function () {

            /*====================================
             ON SCROLL ANIMATION SCRIPTS 
            ======================================*/
           
            
            window.scrollReveal = new scrollReveal();

        },
         scroll_fun: function () {

            /*====================================
                 EASING PLUGIN SCRIPTS 
                ======================================*/
            $(function () {
                $('.move-me a').bind('click', function (event) { //just pass move-me in design and start scrolling
                    var $anchor = $(this);
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1000, 'easeInOutQuad');
                    event.preventDefault();
                });
            });

        },

         top_flex_slider_fun:function()
         {
             /*====================================
              FLEX SLIDER SCRIPTS 
             ======================================*/
             $('#main-section').flexslider({
                 animation: "fade", //String: Select your animation type, "fade" or "slide"
                 slideshowSpeed: 3000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
                 animationSpeed: 1000,           //Integer: Set the speed of animations, in milliseconds
                 startAt: 0,    //Integer: The slide that the slider should start on. Array notation (0 = first slide)

             });
         },
      
        custom_fun:function()
        {
            /*====================================
             WRITE YOUR   SCRIPTS  BELOW
            ======================================*/




        },

    }
   
   
    $(document).ready(function () {
        mainApp.scrollAnimation_fun();
        mainApp.scroll_fun();
        mainApp.top_flex_slider_fun();
        mainApp.custom_fun();
    });
}(jQuery));


$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var a        = $(".navbar-collapse");
        var _opened = a[0].classList.contains('in');
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
            $("button.navbar-toggle").click();
        }
    });
});


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}



