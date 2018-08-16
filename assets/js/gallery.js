$(document).ready(function () {

  // var domainPictures = 28

  // for(var imgIndex = 1; imgIndex < domainPictures; imgIndex++) {
  //   debugger;
  //   $('#swiper-container--domain').find('swiper-wrapper').innerHTML += '<div class="swiper-slide" style="background-image:url(../assets/images/domaine/domaine-' + imgIndex + '.jpg)"></div>'
  // }

  // Swiper
  var galleryDomain = new Swiper('#swiper-container--domain', {
    centeredSlides: true,
    loop: true,
    lazyLoading: true,
    autoplay: false,
    speed: 600,
    slidesPerView: 'auto',
    spaceBetween: 75,
    observer: true,
    observeParents: true,
    pagination: {
      el: '.swiper-pagination--domain',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var galleryCeremony = new Swiper('#swiper-container--ceremony', {
    centeredSlides: true,
    loop: true,
    lazyLoading: true,
    autoplay: false,
    speed: 600,
    slidesPerView: 'auto',
    spaceBetween: 75,
    observer: true,
    observeParents: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var galleryCocktail = new Swiper('#swiper-container--cocktail', {
    centeredSlides: true,
    loop: true,
    lazyLoading: true,
    autoplay: false,
    speed: 600,
    slidesPerView: 'auto',
    spaceBetween: 75,
    observer: true,
    observeParents: true,
    initialSlide: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var galleryDiner = new Swiper('#swiper-container--diner', {
    centeredSlides: true,
    loop: true,
    lazyLoading: true,
    autoplay: false,
    speed: 600,
    slidesPerView: 'auto',
    spaceBetween: 75,
    observer: true,
    observeParents: true,
    initialSlide: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var galleryHebergement = new Swiper('#swiper-container--hebergement', {
    centeredSlides: true,
    loop: true,
    lazyLoading: true,
    autoplay: false,
    speed: 600,
    slidesPerView: 'auto',
    spaceBetween: 75,
    observer: true,
    observeParents: true,
    initialSlide: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var galleryVideos = new Swiper('#swiper-container--videos', {
    centeredSlides: true,
    // loop: true,
    lazyLoading: true,
    autoplay: false,
    speed: 600,
    slidesPerView: 'auto',
    spaceBetween: 75,
    observer: true,
    observeParents: true,
    initialSlide: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $("#swiper-container--cocktail, #swiper-container--ceremony, #swiper-container--diner, #swiper-container--hebergement, #swiper-container--videos").hide();
  $('.navigation__tab[data-selector="domain"]').addClass('navigation__tab--selected');
  if (location.hash == '#domaine') {
    $("#swiper-container--domain").show();
    $("#swiper-container--cocktail, #swiper-container--ceremony, #swiper-container--diner, #swiper-container--hebergement, #swiper-container--videos").hide();
    $('.navigation__tab').removeClass('navigation__tab--selected');
    $('.navigation__tab[data-selector="domain"]').addClass('navigation__tab--selected');
  } else if (location.hash == '#ceremony') {
    $("#swiper-container--ceremony").show();
    $("#swiper-container--cocktail, #swiper-container--domain, #swiper-container--diner, #swiper-container--hebergement, #swiper-container--videos").hide();
    $('.navigation__tab').removeClass('navigation__tab--selected');
    $('.navigation__tab[data-selector="ceremony"]').addClass('navigation__tab--selected');
  } else if (location.hash == '#cocktail') {
    $("#swiper-container--cocktail").show();
    $("#swiper-container--domain, #swiper-container--ceremony, #swiper-container--diner, #swiper-container--hebergement, #swiper-container--videos").hide();
    $('.navigation__tab').removeClass('navigation__tab--selected');
    $('.navigation__tab[data-selector="cocktail"]').addClass('navigation__tab--selected');
  } else if (location.hash == '#diner') {
    $("#swiper-container--diner").show();
    $("#swiper-container--domain, #swiper-container--ceremony, #swiper-container--cocktail, #swiper-container--hebergement, #swiper-container--videos").hide();
    $('.navigation__tab').removeClass('navigation__tab--selected');
    $('.navigation__tab[data-selector="diner"]').addClass('navigation__tab--selected');
  } else if (location.hash == '#hebergement') {
    $("#swiper-container--hebergement").show();
    $("#swiper-container--domain, #swiper-container--ceremony, #swiper-container--cocktail, #swiper-container--diner, #swiper-container--videos").hide();
    $('.navigation__tab').removeClass('navigation__tab--selected');
    $('.navigation__tab[data-selector="hebergement"]').addClass('navigation__tab--selected');
  } else if (location.hash == '#videos') {
    $("#swiper-container--videos").show();
    $("#swiper-container--domain, #swiper-container--ceremony, #swiper-container--cocktail, #swiper-container--diner, #swiper-container--hebergement").hide();
    $('.navigation__tab').removeClass('navigation__tab--selected');
    $('.navigation__tab[data-selector="videos"]').addClass('navigation__tab--selected');
  }

  $(".navigation__tab").click(function() {

    var blockName = $(this).data('selector');
    $('.navigation__tab').removeClass('navigation__tab--selected');
    $(this).addClass('navigation__tab--selected');
    if(blockName == 'ceremony') {
      $("#swiper-container--ceremony").show();
      $("#swiper-container--cocktail, #swiper-container--domain, #swiper-container--diner, #swiper-container--hebergement, #swiper-container--videos").hide();
      window.location.hash = 'ceremony';
    } else if(blockName == 'cocktail') {
      $("#swiper-container--cocktail").show();
      $("#swiper-container--ceremony, #swiper-container--domain, #swiper-container--diner, #swiper-container--hebergement, #swiper-container--videos").hide();
      window.location.hash = 'cocktail';
    } else if(blockName == 'diner') {
      $("#swiper-container--diner").show();
      $("#swiper-container--ceremony, #swiper-container--domain, #swiper-container--cocktail, #swiper-container--hebergement, #swiper-container--videos").hide();
      window.location.hash = 'diner';
    } else if(blockName == 'hebergement') {
      $("#swiper-container--hebergement").show();
      $("#swiper-container--ceremony, #swiper-container--domain, #swiper-container--cocktail, #swiper-container--diner, #swiper-container--videos").hide();
      window.location.hash = 'hebergement';
    } else if(blockName == 'videos') {
      $("#swiper-container--videos").show();
      $("#swiper-container--ceremony, #swiper-container--domain, #swiper-container--cocktail, #swiper-container--diner, #swiper-container--hebergement").hide();
      window.location.hash = 'videos';
    } else {
      $("#swiper-container--domain").show();
      $("#swiper-container--cocktail, #swiper-container--ceremony, #swiper-container--diner, #swiper-container--hebergement, #swiper-container--videos").hide();
      window.location.hash = 'domain';
    }
  });

});