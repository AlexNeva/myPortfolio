document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const hero = document.querySelector('.hero');

  const nav = document.querySelector('.nav');
  const navLine = document.querySelector('.nav__line');
  const navItems = document.querySelectorAll('.header__item');
  const navLineWidth = navLine.offsetWidth;
  const animDuration = 500;


  if (hero) {
    window.addEventListener('scroll', () => {
      let scrollTop = window.scrollY;
      let blockEnd = hero.offsetHeight;

      if (scrollTop >= blockEnd) {
        header.classList.add('colored');
      } else {
        header.classList.remove('colored');
      }
    })
  }


  navLine.style.left = `${navItems[0].offsetWidth / 2 - navLineWidth / 2}px`;

  navItems.forEach(el => {
    el.addEventListener('mouseenter', (e) => {
      navLine.style.left = `${e.currentTarget.offsetLeft + e.currentTarget.offsetWidth / 2 - navLineWidth / 2}px`;
      navLine.classList.add('animation');
      setTimeout(function () {
        navLine.classList.remove('animation');
      }, animDuration)
    })

    // el.addEventListener('mouseleave', () => {
    //   navLine.style.left = `${navItems[0].offsetWidth / 2 - navLineWidth / 2}px`;
    // })
  })

});