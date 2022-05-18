var swiper = new Swiper('.js-fullpage', {
  speed: 1000,
  direction: 'vertical',
  slidesPerView: 1,
  mousewheel: true,
  pagination: {
    el: '.js-fullpage .swiper-pagination',
    clickable: true,
  },
});

var js_banner_swiper = new Swiper('.js-banner', {
  speed:1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // navigation: {
  //   nextEl: '.js-banner .swiper-button-next',
  //   prevEl: '.js-banner .swiper-button-prev',
  // },
});

var js_flex_swiper = new Swiper('.js-flex-container', {
  slidesPerView: 2,
  speed:1000,
  autoplay:true,
  spaceBetween: 10,
  // init: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 0,
      autoplay:false,
      centeredSlides : true,
      centeredSlidesBounds: true
    },
  }
});