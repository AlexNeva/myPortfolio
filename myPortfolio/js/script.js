// Webp Support

function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});

// Webp Support;
document.addEventListener('DOMContentLoaded', () => {
  const heroSection = document.querySelector('.hero');

  heroSection.addEventListener('mousemove', (e) => {
    const moveImg = document.querySelector('#move-img');
    const moveBg = document.querySelector('#move-bg');

    moveBg.style.right = e.pageX / 50 + 'px';
    moveBg.style.top = e.pageY / 50 + 'px';

    moveImg.style.right = 5 - e.pageX / 3000 + '%';
    moveImg.style.bottom = - e.pageY / 100 + 'px';
  })
});;
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

});;
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
});
document.addEventListener('DOMContentLoaded', () => {
  const filterBlocks = document.querySelectorAll('.card-portfolio');
  const filterItems = document.querySelectorAll('.filter__item');

  filterItems.forEach(el => {
    el.addEventListener('click', () => {
      let filterClass = el.dataset['f'];

      filterBlocks.forEach(elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
          elem.classList.add('hide');
        }
      })
    })
  })
});





