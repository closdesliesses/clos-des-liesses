$(document).ready(function(){$(".specs__section-question, .specs__unwinder").click(function(){AOS.refresh();var s=$(this).parent(".specs__topic").find(".specs__section-answer-containers").height();if($(this).parents(".specs__topic").siblings().removeClass("specs__topic--opened"),$(this).parents(".specs__section").siblings().find(".specs__topic").removeClass("specs__topic--opened"),$(this).parents(".specs__topic").toggleClass("specs__topic--opened"),$(".specs__section-answer-wrapper").height(0),$(this).parents(".specs__topic").hasClass("specs__topic--opened")){e=this;$(e).siblings(".specs__section-answer-wrapper").height(s+20)}else{var e=this;$(e).siblings(".specs__section-answer-wrapper").height(0)}})});