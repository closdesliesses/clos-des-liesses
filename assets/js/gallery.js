$(document).ready(function(){new Swiper("#swiper-container--domain",{centeredSlides:!0,loop:!0,lazy:!0,autoplay:!1,speed:600,slidesPerView:"auto",spaceBetween:75,observer:!0,observeParents:!0,pagination:{el:".swiper-pagination--domain",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},watchSlidesVisibility:!0}),new Swiper("#swiper-container--ceremony",{centeredSlides:!0,loop:!0,lazy:!0,autoplay:!1,speed:600,slidesPerView:"auto",spaceBetween:75,observer:!0,observeParents:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},watchSlidesVisibility:!0}),new Swiper("#swiper-container--cocktail",{centeredSlides:!0,loop:!0,lazy:!0,autoplay:!1,speed:600,slidesPerView:"auto",spaceBetween:75,observer:!0,observeParents:!0,initialSlide:0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},watchSlidesVisibility:!0}),new Swiper("#swiper-container--diner",{centeredSlides:!0,loop:!0,lazy:!0,autoplay:!1,speed:600,slidesPerView:"auto",spaceBetween:75,observer:!0,observeParents:!0,initialSlide:0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},watchSlidesVisibility:!0}),new Swiper("#swiper-container--hebergement",{centeredSlides:!0,loop:!0,lazy:!0,autoplay:!1,speed:600,slidesPerView:"auto",spaceBetween:75,observer:!0,observeParents:!0,initialSlide:0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},watchSlidesVisibility:!0}),new Swiper("#swiper-container--videos",{centeredSlides:!0,lazy:!0,autoplay:!1,speed:600,slidesPerView:"auto",spaceBetween:75,observer:!0,observeParents:!0,initialSlide:0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},watchSlidesVisibility:!0});$("#swiper-container--cocktail, #swiper-container--ceremony, #swiper-container--diner, #swiper-container--hebergement, #swiper-container--videos").hide(),$('.navigation__tab[data-selector="domain"]').addClass("navigation__tab--selected"),"#domaine"==location.hash?($("#swiper-container--domain").show(),$("#swiper-container--cocktail, #swiper-container--ceremony, #swiper-container--diner, #swiper-container--hebergement, #swiper-container--videos").hide(),$(".navigation__tab").removeClass("navigation__tab--selected"),$('.navigation__tab[data-selector="domain"]').addClass("navigation__tab--selected")):"#ceremony"==location.hash?($("#swiper-container--ceremony").show(),$("#swiper-container--cocktail, #swiper-container--domain, #swiper-container--diner, #swiper-container--hebergement, #swiper-container--videos").hide(),$(".navigation__tab").removeClass("navigation__tab--selected"),$('.navigation__tab[data-selector="ceremony"]').addClass("navigation__tab--selected")):"#cocktail"==location.hash?($("#swiper-container--cocktail").show(),$("#swiper-container--domain, #swiper-container--ceremony, #swiper-container--diner, #swiper-container--hebergement, #swiper-container--videos").hide(),$(".navigation__tab").removeClass("navigation__tab--selected"),$('.navigation__tab[data-selector="cocktail"]').addClass("navigation__tab--selected")):"#diner"==location.hash?($("#swiper-container--diner").show(),$("#swiper-container--domain, #swiper-container--ceremony, #swiper-container--cocktail, #swiper-container--hebergement, #swiper-container--videos").hide(),$(".navigation__tab").removeClass("navigation__tab--selected"),$('.navigation__tab[data-selector="diner"]').addClass("navigation__tab--selected")):"#hebergement"==location.hash?($("#swiper-container--hebergement").show(),$("#swiper-container--domain, #swiper-container--ceremony, #swiper-container--cocktail, #swiper-container--diner, #swiper-container--videos").hide(),$(".navigation__tab").removeClass("navigation__tab--selected"),$('.navigation__tab[data-selector="hebergement"]').addClass("navigation__tab--selected")):"#videos"==location.hash&&($("#swiper-container--videos").show(),$("#swiper-container--domain, #swiper-container--ceremony, #swiper-container--cocktail, #swiper-container--diner, #swiper-container--hebergement").hide(),$(".navigation__tab").removeClass("navigation__tab--selected"),$('.navigation__tab[data-selector="videos"]').addClass("navigation__tab--selected")),$(".navigation__tab").click(function(){var e=$(this).data("selector");$(".navigation__tab").removeClass("navigation__tab--selected"),$(this).addClass("navigation__tab--selected"),"ceremony"==e?($("#swiper-container--ceremony").show(),$("#swiper-container--cocktail, #swiper-container--domain, #swiper-container--diner, #swiper-container--hebergement, #swiper-container--videos").hide(),window.location.hash="ceremony"):"cocktail"==e?($("#swiper-container--cocktail").show(),$("#swiper-container--ceremony, #swiper-container--domain, #swiper-container--diner, #swiper-container--hebergement, #swiper-container--videos").hide(),window.location.hash="cocktail"):"diner"==e?($("#swiper-container--diner").show(),$("#swiper-container--ceremony, #swiper-container--domain, #swiper-container--cocktail, #swiper-container--hebergement, #swiper-container--videos").hide(),window.location.hash="diner"):"hebergement"==e?($("#swiper-container--hebergement").show(),$("#swiper-container--ceremony, #swiper-container--domain, #swiper-container--cocktail, #swiper-container--diner, #swiper-container--videos").hide(),window.location.hash="hebergement"):"videos"==e?($("#swiper-container--videos").show(),$("#swiper-container--ceremony, #swiper-container--domain, #swiper-container--cocktail, #swiper-container--diner, #swiper-container--hebergement").hide(),window.location.hash="videos"):($("#swiper-container--domain").show(),$("#swiper-container--cocktail, #swiper-container--ceremony, #swiper-container--diner, #swiper-container--hebergement, #swiper-container--videos").hide(),window.location.hash="domain")})});