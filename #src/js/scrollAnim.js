document.addEventListener('DOMContentLoaded', () => {
  const scrollitems = document.querySelectorAll('.scroll-item');

  const scrollAnimation = () => {
    let windowcenter = (window.innerHeight / 2) + window.scrollY;

    scrollitems.forEach(el => {
      let scrollOffset = el.offsetTop;
      if (windowcenter >= scrollOffset) {
        el.classList.add('active');
      }
    })
  }

  scrollAnimation();
  window.addEventListener('scroll', () => {
    scrollAnimation();
  })
})