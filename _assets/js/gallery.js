$(document).ready(function () {
  debugger

  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    // loopedSlides: $('.gallery-top .swiper-wrapper .swiper-slide').length,
    lazyLoading: true,
    autoplay: false,
    speed: 600,
    slidesPerView: 'auto',
    spaceBetween: 75,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // setTimeout(function(){
  //   galleryTop.params.autoplay = { delay: 4000 }
  //   galleryTop.autoplay.start();
  // }, 4000);

  // var galleryThumbs = new Swiper('.gallery-thumbs', {
  //   spaceBetween: 10,
  //   centeredSlides: true,
  //   slidesPerView: 'auto',
  //   loop: true,
  //   loopedSlides: $('.gallery-thumbs .swiper-wrapper .swiper-slide').length,
  //   speed: 600,
  //   touchRatio: 0.2,
  //   lazyLoading: true,
  //   slideToClickedSlide: true,
  // });

  // galleryTop.controller.control = galleryThumbs;
  // galleryThumbs.controller.control = galleryTop;

});