document.addEventListener('DOMContentLoaded', () => {
  const cubeSwiper = new Swiper('.portfolio-cube__swiper', {
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 30,
      shadowScale: 0.8,
    },
    pagination: {
      el: '.portfolio-cube-pagination',
    },
    navigation: {
      nextEl: '.portfolio-cube-next',
      prevEl: '.portfolio-cube-prev',
    },
  });


  const cubeItems = document.querySelectorAll('.portfolio-cube__item');
  const cubeSlides = document.querySelectorAll('.portfolio-cube__slide');


  cubeSwiper.on('slideChange', function () {
    this.update();
    cubeItems.forEach((el, index) => {
      el.classList.remove('portfolio-cube__item--active');

      if (cubeSlides[index].classList.contains('swiper-slide-active')) {
        el.classList.add('portfolio-cube__item--active');
      }
    })
  })
});


