// Pro-event.js

$(document).ready(function(){

  $(window).resize(function() {
    $('.pro-event__background-intro').height($(window).height());

    $(".scroll-indicator-bullets--pro-event").css({"top": $(window).height() + 50 + "px", "height": "120px"});
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
    var proEventBlock1 = $('#pro-event-block-centered').offset().top - 100,
        proEventBlock2 = $('#pro-event-block-1').offset().top - 100,
        proEventBlock3 = $('#pro-event-block-2').offset().top - 100,
        proEventBlock4 = $('#pro-event-block-3').offset().top - 100,
        proEventBlock5 = $('#pro-event-block-4').offset().top - 100,
        footer = $('footer').offset().top - 100;

    var scrollPos = $(document).scrollTop();

    $('.bullet-pro-event-centered, .bullet-pro-event-1, .bullet-pro-event-2, .bullet-pro-event-3, .bullet-pro-event-4').removeClass('current');

    if (scrollPos >= proEventBlock1 && scrollPos < proEventBlock2) {
      $('.bullet-pro-event-centered').addClass('current');
    } else if (scrollPos >= proEventBlock2 && scrollPos < proEventBlock3) {
      $('.bullet-pro-event-1').addClass('current');
    } else if (scrollPos >= proEventBlock3 && scrollPos < proEventBlock4) {
      $('.bullet-pro-event-2').addClass('current');
    } else if (scrollPos >= proEventBlock4 && scrollPos < proEventBlock5) {
      $('.bullet-pro-event-3').addClass('current');
    } else if (scrollPos >= proEventBlock5 && scrollPos < footer) {
      $('.bullet-pro-event-4').addClass('current');
    }
  });

});
