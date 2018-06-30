$(document).ready(function(){

  $(window).resize(function() {
    $('.homepage__background-intro').height($(window).height());
  });

  $(window).trigger('resize');

});
