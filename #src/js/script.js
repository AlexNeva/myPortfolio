@@include('webp-support.js');
@@include('swiper-bundle.min.js');
@@include('header.js');
@@include('scrollAnim.js');
@@include('filter.js');


const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 50,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});


