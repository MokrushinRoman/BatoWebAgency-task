const mobMenuButton = document.querySelector('.menu-burger');
const mobileMenu = document.querySelector('.mob-menu');
const menuSubButton = document.querySelector('.mobile-menu__button');

if (mobMenuButton) {
    mobMenuButton.addEventListener('click', function (e) {
        // document.body.classList.toggle('menu-open');
        e.target.classList.toggle('active');
        mobileMenu.classList.toggle('visually-hidden');
    });
}
