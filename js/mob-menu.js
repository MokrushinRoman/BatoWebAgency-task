import { isMobile } from './check.js';

const mobMenuButton = document.querySelector('.menu-burger');
const mobileMenu = document.querySelector('.mob-menu');
const popUpMob = document.querySelector('.pop-up.mob');
let activeElem = null;

const handleShowPopUpMob = e => {
   e.preventDefault();

   if (e.target.nodeName === 'DIV') {
      if (activeElem) {
         activeElem.classList.remove('active');
         activeElem = null;
      }
      popUpMob.classList.add('visually-hidden');
   }

   if (e.target.nodeName !== 'P') {
      return;
   }
   if (e.target.parentNode.contains(popUpMob)) {
      e.target.classList.add('active');
      popUpMob.classList.remove('visually-hidden');
      activeElem = e.target;
   }

   return;
};

if (mobMenuButton) {
   mobMenuButton.addEventListener('click', function (e) {
      document.body.classList.toggle('menu-open');
      e.target.classList.toggle('active');
      mobileMenu.classList.toggle('visually-hidden');
   });
}

if (isMobile.any()) {
   if (mobileMenu) {
      mobileMenu.addEventListener('click', handleShowPopUpMob);
   }
}
