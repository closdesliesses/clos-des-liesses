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

  $("#swiper-container--cocktail, #swiper-container--ceremony").hide();
  $('.navigation__tab[data-selector="domain"]').addClass('navigation__tab--selected');
  if (location.hash == '#domaine') {
    $("#swiper-container--domain").show();
    $("#swiper-container--cocktail, #swiper-container--ceremony").hide();
    $('.navigation__tab').removeClass('navigation__tab--selected');
    $('.navigation__tab[data-selector="domain"]').addClass('navigation__tab--selected');
  } else if (location.hash == '#ceremony') {
    $("#swiper-container--ceremony").show();
    $("#swiper-container--cocktail, #swiper-container--domain").hide();
    $('.navigation__tab').removeClass('navigation__tab--selected');
    $('.navigation__tab[data-selector="ceremony"]').addClass('navigation__tab--selected');
  } else if (location.hash == '#cocktail') {
    $("#swiper-container--cocktail").show();
    $("#swiper-container--domain, #swiper-container--ceremony").hide();
    $('.navigation__tab').removeClass('navigation__tab--selected');
    $('.navigation__tab[data-selector="cocktail"]').addClass('navigation__tab--selected');
  }

  $(".navigation__tab").click(function() {
    
    var blockName = $(this).data('selector');
    $('.navigation__tab').removeClass('navigation__tab--selected');
    $(this).addClass('navigation__tab--selected');
    if(blockName == 'domain') {
      $("#swiper-container--domain").show();
      $("#swiper-container--cocktail, #swiper-container--ceremony").hide();
      window.location.hash = 'domaine';
    } else if(blockName == 'ceremony') {
      $("#swiper-container--ceremony").show();
      $("#swiper-container--cocktail, #swiper-container--domain").hide();
      window.location.hash = 'ceremony';
    } else {
      $("#swiper-container--cocktail").show();
      $("#swiper-container--domain, #swiper-container--ceremony").hide();
      window.location.hash = 'cocktail';
    }
  });  

});