/*
 * Octaskin Javascript
 */

 $(document).ready(function() {
   // Header
   $(window).bind('load scroll', function(){
      var y = $(window).scrollTop();
      console.log(y);
      if (y <= 15){
        $('#lt-section-header').addClass('lt-nav-background');
      } else if (y > 15) {
        $('#lt-section-header').removeClass('lt-nav-background');
      }
   });

   // Navigation
   $('#lt-mobile-toggle').sideNav();

   // Showcase
   $('#lt-slider').slider({full_width: true});
   $(window).resize(function() {
       $('#lt-slider').height($(window).height() + 15).css('position', 'relative'); ;
   });
   $(window).trigger('resize');

   // Utility
   $('#lt-materializecss-tab').tabs();
   $('.parallax').parallax();
   $('.modal-trigger').leanModal();

   // Expanded
   $('#lt-carousel').carousel({
     full_width: true,
     indicators: true
   });


 });
