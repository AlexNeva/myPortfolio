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
})