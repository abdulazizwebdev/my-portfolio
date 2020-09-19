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

// modal 

// const modal = document.querySelector('.modal'),
//       btnClose = document.querySelector('.modal__close'),
//       btnSub = document.querySelector('.contacts__btn'),
//       modalOverlay = document.querySelector('.overlay'),
//       inputs = document.querySelectorAll('.contacts__input');

// modalOverlay.classList.add('hide');
// inputs.forEach(item => {
//     if (!item.value === '') {
//         openModal(btnSub);
//     }
// });

// btnClose.addEventListener('click', () => {
//     modal.classList.remove('show');
//     modal.classList.add('hide');
//     modalOverlay.classList.add('hide');
//     modalOverlay.classList.remove('show');
// });

// function openModal(item) {
//     item.addEventListener('click', () => {
//         modal.classList.remove('hide');
//         modal.classList.add('show');
        
//         modalOverlay.classList.remove('hide');
//         modalOverlay.classList.add('show');
//     });
// }

