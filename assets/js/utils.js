$(document).ready(function(){AOS.init({duration:800,delay:50}),$("#menuToggle").find("input").click(function(){$("#homepage, #domain, #event-pro, #private-event, #gallery, #contact, #phone-nav > a").toggleClass("blur")}),$(window).scroll(function(){AOS.refresh();var n=$(window).scrollTop();$(window).height();n>0?$("nav").addClass("fixed"):$("nav").removeClass("fixed")}),$(".js-scrollTo").on("click",function(){var n=$(this).attr("href");return $("html, body").animate({scrollTop:$(n).offset().top-100},600),!1}),(window.location.href.indexOf("galerie")>-1||window.location.href.indexOf("contact")>-1)&&$("nav").addClass("black")});