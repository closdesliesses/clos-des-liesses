// Unwinder

$( document ).ready(function() {

  $(".specs__section-question, .specs__unwinder").click(function() {
    AOS.refresh();
    var $answerHeight = $(this).parent(".specs__topic").find(".specs__section-answer-containers").height();

    $(this).parents(".specs__topic").siblings().removeClass("specs__topic--opened");
    $(this).parents(".specs__section").siblings().find(".specs__topic").removeClass("specs__topic--opened");
    $(this).parents(".specs__topic").toggleClass("specs__topic--opened");
    $(".specs__section-answer-wrapper").height(0);

    if($(this).parents(".specs__topic").hasClass("specs__topic--opened")) {
      var _this = this;
      $(_this).siblings(".specs__section-answer-wrapper").height($answerHeight + 20);
    } else {
      var _this = this;
      $(_this).siblings(".specs__section-answer-wrapper").height(0);
    }
  });

});
