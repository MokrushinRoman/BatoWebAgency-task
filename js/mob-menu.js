import { isMobile } from './check.js';

const mobMenuButton = document.querySelector('.menu-burger');
const mobileMenu = document.querySelector('.mob-menu');
const menuSubButton = document.querySelector('.mobile-menu__button');
const popUp = document.querySelector('.pop-up');
const mobMenuItems = document.querySelectorAll('.mob-menu__item');
const mobMenuText = document.querySelector('.mob-menu__text');

const handleShowPopUp = e => {
   console.log(e.target);
   console.log(e.currentTarget);
   if (e.target !== e.currentTarget || e.target === mobMenuText) {
      popUp.classList.toggle('visually-hidden');

      return;
   }

   console.log(true);
   return;
};

if (mobMenuButton) {
   mobMenuButton.addEventListener('click', function (e) {
      // document.body.classList.toggle('menu-open');
      e.target.classList.toggle('active');
      mobileMenu.classList.toggle('visually-hidden');
   });
}

if (isMobile.any()) {
   if (mobMenuItems.length > 0) {
      mobMenuItems.forEach(item => {
         if (item.contains(popUp)) {
            item.addEventListener('click', handleShowPopUp);
            return;
         }
         return;
      });
   }
}
