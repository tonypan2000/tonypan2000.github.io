$(document).ready(function(){
    $('.header').height($(window).height());
  })

  $(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 50, 'linear');
    });
  });

  $('.carousel').carousel({
    interval: 2000
  })
  
  (function($) {
    "use strict";
    // manual carousel controls
    $('.next').click(function(){ $('.carousel').carousel('next');return false; });
    $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });
  })(jQuery);