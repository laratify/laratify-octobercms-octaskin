$(document).ready(function() {
  // Navigation
  $(window).bind('load scroll', function(){
     var y = $(window).scrollTop();
     if (y <= 15) {
       $('#lt-navigation nav').addClass('lt-no-background');
     } else if (y > 15) {
       $('#lt-navigation nav').removeClass('lt-no-background');
     }
  });
  $('.lt-mobile-toggle').sideNav();

  // Slider
  $('.lt-slider').slider({full_width: true});
  $(window).resize(function() {
      $('.lt-slider').height($(window).height() + 15).css('position', 'relative');
  });
  $(window).trigger('resize');

  // Parallax
  $('.lt-parallax').parallax();

  // Tabs
  $('.lt-tabs').tabs();

  // Modal
  $('.lt-modal-trigger').leanModal();

  // Owl Carousel
  $('.owl-carousel').owlCarousel({
      loop:true,
      items: 1,
      center: true
  })

  // Select
  $('select').material_select();

  // DatePicker
  $('.datepicker').pickadate({
    selectMonths: true,
    selectYears: 15
  });

});
