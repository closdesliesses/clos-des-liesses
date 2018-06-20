//utils

$(document).ready(function(){

  $(window).resize(function() {
    $('.homepage__background-intro, .domain__background-intro').height($(window).height()); // Set the height of the window to the .home
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
    }
  });

	$('.js-scrollTo').on('click', function() {
		var page = $(this).attr('href');

		$('html, body').animate( { scrollTop: $(page).offset().top }, 600 );
		return false;
	});
});
