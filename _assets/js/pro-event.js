// Pro-event.js

$(document).ready(function(){

  $(window).resize(function() {
    $('.pro-event__background-intro').height($(window).height());

    $(".scroll-indicator-bullets--pro-event").css({"top": $(window).height() + 50 + "px", "height": "240px"});
  });

  $(window).trigger('resize');

  $(window).scroll(function(){

    var $scrollTop = $(window).scrollTop(),
        $windowHeight = $(window).height();

    // Private Event
    if($scrollTop > ($windowHeight - 100) && $scrollTop < (parseInt($("#pro-event").height() - $windowHeight, 10) - 200)) {
      $(".scroll-indicator-bullets--pro-event").addClass("fixed").css({"top": "150px"});;
    }
    else {
      $(".scroll-indicator-bullets--pro-event").removeClass("fixed").css({"top": $windowHeight + 50 + "px"});
    };

    if($scrollTop > (parseInt($("#pro-event").height() - $windowHeight, 10) - 200)) {
      $(".scroll-indicator-bullets--pro-event").css({"top": (parseInt($("#pro-event").height() - $windowHeight, 10)) - 50 + "px"});
    };

    // Color current bullet
    var proEventBlock1 = $('#pro-event-block-1').offset().top - 100,
        proEventBlock2 = $('#pro-event-block-2').offset().top - 100,
        proEventBlock3 = $('#pro-event-block-3').offset().top - 100,
        proEventBlock4 = $('#pro-event-block-4').offset().top - 100,
        proEventBlock5 = $('#pro-event-block-5').offset().top - 100,
        proEventBlock6 = $('#pro-event-block-6').offset().top - 100,
        proEventBlock7 = $('#pro-event-block-7').offset().top - 100,
        proEventBlock8 = $('#pro-event-block-8').offset().top - 100,
        proEventBlock9 = $('#pro-event-block-9').offset().top - 100,
        footer = $('footer').offset().top - 100;

    var scrollPos = $(document).scrollTop();

    $('.bullet-pro-event-1, .bullet-pro-event-2, .bullet-pro-event-3, .bullet-pro-event-4, .bullet-pro-event-5, .bullet-pro-event-6, .bullet-pro-event-7, .bullet-pro-event-8, .bullet-pro-event-9').removeClass('current');

    if (scrollPos >= proEventBlock1 && scrollPos < proEventBlock2) {
      $('.bullet-pro-event-1').addClass('current');
    } else if (scrollPos >= proEventBlock2 && scrollPos < proEventBlock3) {
      $('.bullet-pro-event-2').addClass('current');
    } else if (scrollPos >= proEventBlock3 && scrollPos < proEventBlock4) {
      $('.bullet-pro-event-3').addClass('current');
    } else if (scrollPos >= proEventBlock4 && scrollPos < proEventBlock5) {
      $('.bullet-pro-event-4').addClass('current');
    } else if (scrollPos >= proEventBlock5 && scrollPos < proEventBlock6) {
      $('.bullet-pro-event-5').addClass('current');
    } else if (scrollPos >= proEventBlock6 && scrollPos < proEventBlock7) {
      $('.bullet-pro-event-6').addClass('current');
    } else if (scrollPos >= proEventBlock7 && scrollPos < proEventBlock8) {
      $('.bullet-pro-event-7').addClass('current');
    } else if (scrollPos >= proEventBlock8 && scrollPos < proEventBlock9) {
      $('.bullet-pro-event-8').addClass('current');
    } else if (scrollPos >= proEventBlock9 && scrollPos < footer) {
      $('.bullet-pro-event-9').addClass('current');
    }

  });

});
