// Private-event.js

$(document).ready(function(){

  $(window).resize(function() {
    $('.private-event__background-intro').height($(window).height());

    $(".scroll-indicator-bullets--private-event").css({"top": $(window).height() + 50 + "px", "height": "240px"});
  });

  $(window).trigger('resize');

  $(window).scroll(function(){

    var $scrollTop = $(window).scrollTop(),
        $windowHeight = $(window).height();

    // Private Event
    if($scrollTop > ($windowHeight - 100) && $scrollTop < (parseInt($("#private-event").height() - $windowHeight, 10) - 200)) {
      $(".scroll-indicator-bullets--private-event").addClass("fixed").css({"top": "150px"});;
    }
    else {
      $(".scroll-indicator-bullets--private-event").removeClass("fixed").css({"top": $windowHeight + 50 + "px"});
    };

    if($scrollTop > (parseInt($("#private-event").height() - $windowHeight, 10) - 200)) {
      $(".scroll-indicator-bullets--private-event").css({"top": (parseInt($("#private-event").height() - $windowHeight, 10)) - 50 + "px"});
    };

    // Color current bullet
    var privateEventBlock1 = $('#private-event-block-1').offset().top - 100,
        privateEventBlock2 = $('#private-event-block-2').offset().top - 100,
        privateEventBlock3 = $('#private-event-block-3').offset().top - 100,
        privateEventBlock4 = $('#private-event-block-4').offset().top - 100,
        privateEventBlock5 = $('#private-event-block-5').offset().top - 100,
        privateEventBlock6 = $('#private-event-block-6').offset().top - 100,
        privateEventBlock7 = $('#private-event-block-7').offset().top - 100,
        privateEventBlock8 = $('#private-event-block-8').offset().top - 100,
        privateEventBlock9 = $('#private-event-block-9').offset().top - 100,
        footer = $('footer').offset().top - 100;

    var scrollPos = $(document).scrollTop();

    $('.bullet-private-event-1, .bullet-private-event-2, .bullet-private-event-3, .bullet-private-event-4, .bullet-private-event-5, .bullet-private-event-6, .bullet-private-event-7, .bullet-private-event-8, .bullet-private-event-9').removeClass('current');

    if (scrollPos >= privateEventBlock1 && scrollPos < privateEventBlock2) {
      $('.bullet-private-event-1').addClass('current');
    } else if (scrollPos >= privateEventBlock2 && scrollPos < privateEventBlock3) {
      $('.bullet-private-event-2').addClass('current');
    } else if (scrollPos >= privateEventBlock3 && scrollPos < privateEventBlock4) {
      $('.bullet-private-event-3').addClass('current');
    } else if (scrollPos >= privateEventBlock4 && scrollPos < privateEventBlock5) {
      $('.bullet-private-event-4').addClass('current');
    } else if (scrollPos >= privateEventBlock5 && scrollPos < privateEventBlock6) {
      $('.bullet-private-event-5').addClass('current');
    } else if (scrollPos >= privateEventBlock6 && scrollPos < privateEventBlock7) {
      $('.bullet-private-event-6').addClass('current');
    } else if (scrollPos >= privateEventBlock7 && scrollPos < privateEventBlock8) {
      $('.bullet-private-event-7').addClass('current');
    } else if (scrollPos >= privateEventBlock8 && scrollPos < privateEventBlock9) {
      $('.bullet-private-event-8').addClass('current');
    } else if (scrollPos >= privateEventBlock9 && scrollPos < footer) {
      $('.bullet-private-event-9').addClass('current');
    }

  });

});
