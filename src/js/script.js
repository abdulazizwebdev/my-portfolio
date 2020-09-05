// gamburger

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeMenu = document.querySelector('.menu__close'),
      overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlay.addEventListener('click', e => {
    if (e.target === overlay) {
        menu.classList.remove('active');
    }
});

// ratings

const percentage = document.querySelectorAll('.skills__ratings-counter'),
      line = document.querySelectorAll('.skills__ratings-line span');

percentage.forEach((elem, i) => {
    line[i].style.width = elem.innerHTML;
});