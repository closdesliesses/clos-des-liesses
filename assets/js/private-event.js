$(document).ready(function(){$(window).resize(function(){$(".private-event__background-intro").height($(window).height()),$(".scroll-indicator-bullets--private-event").css({top:$(window).height()+50+"px",height:"240px"})}),$(window).trigger("resize"),$(window).scroll(function(){var e=$(window).scrollTop(),t=$(window).height();e>t-100&&e<parseInt($("#private-event").height()-t,10)-200?$(".scroll-indicator-bullets--private-event").addClass("fixed").css({top:"150px"}):$(".scroll-indicator-bullets--private-event").removeClass("fixed").css({top:t+50+"px"}),e>parseInt($("#private-event").height()-t,10)-200&&$(".scroll-indicator-bullets--private-event").css({top:parseInt($("#private-event").height()-t,10)-50+"px"});var r=$("#private-event-block-1").offset().top-100,l=$("#private-event-block-2").offset().top-100,v=$("#private-event-block-3").offset().top-100,n=$("#private-event-block-4").offset().top-100,a=$("#private-event-block-5").offset().top-100,i=$("#private-event-block-6").offset().top-100,o=$("#private-event-block-7").offset().top-100,p=$("#private-event-block-8").offset().top-100,s=$("#private-event-block-9").offset().top-100,c=$("footer").offset().top-100,u=$(document).scrollTop();$(".bullet-private-event-1, .bullet-private-event-2, .bullet-private-event-3, .bullet-private-event-4, .bullet-private-event-5, .bullet-private-event-6, .bullet-private-event-7, .bullet-private-event-8, .bullet-private-event-9").removeClass("current"),u>=r&&u<l?$(".bullet-private-event-1").addClass("current"):u>=l&&u<v?$(".bullet-private-event-2").addClass("current"):u>=v&&u<n?$(".bullet-private-event-3").addClass("current"):u>=n&&u<a?$(".bullet-private-event-4").addClass("current"):u>=a&&u<i?$(".bullet-private-event-5").addClass("current"):u>=i&&u<o?$(".bullet-private-event-6").addClass("current"):u>=o&&u<p?$(".bullet-private-event-7").addClass("current"):u>=p&&u<s?$(".bullet-private-event-8").addClass("current"):u>=s&&u<c&&$(".bullet-private-event-9").addClass("current")})});