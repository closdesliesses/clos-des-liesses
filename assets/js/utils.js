//utils

$(document).ready(function(){

  AOS.init({
    duration: 800,
    delay: 50,
  });

  $("#menuToggle").find("input").click(function() {
    $("#homepage").toggleClass("blur");
  });

  $(window).scroll(function(){

    AOS.refresh();

    var $scrollTop = $(window).scrollTop(),
        $windowHeight = $(window).height();

    if($scrollTop > 0) {
      $("nav").addClass("fixed");
    }
    else {
      $("nav").removeClass("fixed");
    };

  });

	$('.js-scrollTo').on('click', function() {
		var page = $(this).attr('href');

		$('html, body').animate( { scrollTop: $(page).offset().top - 100 }, 600 );
		return false;
	});

});
