//utils

$(document).ready(function(){

  $(window).resize(function() {
    $('#homepage').height($(window).height()); // Set the height of the window to the .home
  });

  $(window).trigger('resize');

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
