// gamburger

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});