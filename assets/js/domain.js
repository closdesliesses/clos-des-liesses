// Domain.js

$(document).ready(function(){

  $(window).resize(function() {
    $('.domain__background-intro').height($(window).height());

    $(".scroll-indicator-bullets--domain").css({"top": $(window).height() + 300 + "px", "height": "210px"});
  });

  $(window).trigger('resize');

  $(window).scroll(function(){

    var $scrollTop = $(window).scrollTop(),
        $windowHeight = $(window).height();

    if($scrollTop > ($windowHeight + 130) && $scrollTop < (parseInt($("#domain").height() - $windowHeight, 10) + 300)) {
      $(".scroll-indicator-bullets--domain").addClass("fixed").css({"top": "150px"});;
    }
    else {
      $(".scroll-indicator-bullets--domain").removeClass("fixed").css({"top": $windowHeight + 270 + "px"});
    };

    if($scrollTop > (parseInt($("#domain").height() - $windowHeight, 10) + 300)) {
      $(".scroll-indicator-bullets--domain").css({"top": (parseInt($("#domain").height() - $windowHeight, 10)) + 450 + "px"});
    };

    // Color current bullet
    var domaineBlock1 = $('#domain-block-1').offset().top - 100,
        domaineBlock2 = $('#domain-block-2').offset().top - 100,
        domaineBlock3 = $('#domain-block-3').offset().top - 100,
        domaineBlock4 = $('#domain-block-4').offset().top - 100,
        domaineBlock5 = $('#domain-block-5').offset().top - 100,
        domaineBlock6 = $('#domain-block-6').offset().top - 100,
        domaineBlock7 = $('#domain-block-7').offset().top - 100,
        domaineBlock8 = $('#domain-block-8').offset().top - 100,
        footer = $('footer').offset().top - 100;

    var scrollPos = $(document).scrollTop();

    $('.bullet-domain-1, .bullet-domain-2, .bullet-domain-3, .bullet-domain-4, .bullet-domain-5, .bullet-domain-6, .bullet-domain-7, .bullet-domain-8').removeClass('current');

    if (scrollPos >= domaineBlock1 && scrollPos < domaineBlock2) {
      $('.bullet-domain-1').addClass('current');
    } else if (scrollPos >= domaineBlock2 && scrollPos < domaineBlock3) {
      $('.bullet-domain-2').addClass('current');
    } else if (scrollPos >= domaineBlock3 && scrollPos < domaineBlock4) {
      $('.bullet-domain-3').addClass('current');
    } else if (scrollPos >= domaineBlock4 && scrollPos < domaineBlock5) {
      $('.bullet-domain-4').addClass('current');
    } else if (scrollPos >= domaineBlock5 && scrollPos < domaineBlock6) {
      $('.bullet-domain-5').addClass('current');
    } else if (scrollPos >= domaineBlock6 && scrollPos < domaineBlock7) {
      $('.bullet-domain-6').addClass('current');
    } else if (scrollPos >= domaineBlock7 && scrollPos < domaineBlock8) {
      $('.bullet-domain-7').addClass('current');
    } else if (scrollPos >= domaineBlock8 && scrollPos < footer) {
      $('.bullet-domain-8').addClass('current');
    }

  });

});
