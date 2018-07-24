$(document).ready(function () {

  // Swiper
  var galleryAll = new Swiper('#swiper-container--all', {
    spaceBetween: 10,
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

  var galleryDomain = new Swiper('#swiper-container--domain', {
    spaceBetween: 10,
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
    spaceBetween: 10,
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

  $("#swiper-container--domain, #swiper-container--ceremony").hide();
  $('.navigation__tab[data-selector="all"]').addClass('navigation__tab--selected');
  if (location.hash == '#all') {
    $("#swiper-container--all").show();
    $("#swiper-container--domain, #swiper-container--ceremony").hide();
    $('.navigation__tab[data-selector="all"]').addClass('navigation__tab--selected');
  } else if (location.hash == '#domaine') {
    $("#swiper-container--domain").show();
    $("#swiper-container--all, #swiper-container--ceremony").hide();
    $('.navigation__tab').removeClass('navigation__tab--selected');
    $('.navigation__tab[data-selector="domain"]').addClass('navigation__tab--selected');
  } else if (location.hash == '#ceremony') {
    $("#swiper-container--ceremony").show();
    $("#swiper-container--all, #swiper-container--domain").hide();
    $('.navigation__tab').removeClass('navigation__tab--selected');
    $('.navigation__tab[data-selector="ceremony"]').addClass('navigation__tab--selected');
  }

  $(".navigation__tab").click(function() {
    galleryDomain.update();
    galleryCeremony.update();
    galleryAll.update();
    galleryDomain.navigation.update();
    galleryCeremony.navigation.update();
    galleryAll.navigation.update();
    var blockName = $(this).data('selector');
    $('.navigation__tab').removeClass('navigation__tab--selected');
    $(this).addClass('navigation__tab--selected');
    if(blockName == 'domain') {
      $("#swiper-container--domain").show();
      $("#swiper-container--all, #swiper-container--ceremony").hide();
      window.location.hash = 'domaine';
    } else if(blockName == 'ceremony') {
      $("#swiper-container--ceremony").show();
      $("#swiper-container--all, #swiper-container--domain").hide();
      window.location.hash = 'ceremony';
    } else {
      $("#swiper-container--all").show();
      $("#swiper-container--domain, #swiper-container--ceremony").hide();
      window.location.hash = 'all';
    }
  });

  

});