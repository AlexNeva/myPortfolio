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
});