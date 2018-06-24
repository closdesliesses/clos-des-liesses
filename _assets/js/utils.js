//utils

$(document).ready(function(){

  $(window).resize(function() {
    $('.homepage__background-intro, .domain__background-intro').height($(window).height());

    $(".scroll-indicator-bullets").css({"top": $(window).height() + 300 + "px", "height": "210px"});
  });

  $(window).trigger('resize');

  AOS.init({
    duration: 800,
    delay: 50,
  });

  $("#menuToggle").find("input").click(function() {
    $("#homepage").toggleClass("blur");
  });

  $(window).scroll(function(){
    var $scrollTop = $(window).scrollTop(),
        $windowHeight = $(window).height();

    if($scrollTop > 0) {
      $("nav").addClass("fixed");
    }
    else {
      $("nav").removeClass("fixed");
    };

    if($scrollTop > ($windowHeight + 130) && $scrollTop < (parseInt($("#domain").height() - $windowHeight, 10) + 300)) {
      $(".scroll-indicator-bullets").addClass("fixed").css({"top": "150px"});;
    }
    else {
      $(".scroll-indicator-bullets").removeClass("fixed").css({"top": $windowHeight + 270 + "px"});
    };

    if($scrollTop > (parseInt($("#domain").height() - $windowHeight, 10) + 300)) {
      $(".scroll-indicator-bullets").css({"top": (parseInt($("#domain").height() - $windowHeight, 10)) + 450 + "px"});
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
    console.log('enter');
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

	$('.js-scrollTo').on('click', function() {
		var page = $(this).attr('href');

		$('html, body').animate( { scrollTop: $(page).offset().top - 100 }, 600 );
		return false;
	});

  var domaineBlock1 = $('#domain-block-1').offset().top;
  var domaineBlock2 = $('#domain-block-2').offset().top;
  var domaineBlock3 = $('#domain-block-3').offset().top;
  var domaineBlock4 = $('#domain-block-4').offset().top;
  var domaineBlock5 = $('#domain-block-5').offset().top;
  var domaineBlock6 = $('#domain-block-6').offset().top;
  var domaineBlock7 = $('#domain-block-7').offset().top;
  var domaineBlock8 = $('#domain-block-8').offset().top;


  // if($('#domain').find('.scroll-indicator-bullets')) {
  //
  // }


});
