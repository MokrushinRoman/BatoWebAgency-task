import { isMobile } from './check.js';

const mobMenuButton = document.querySelector('.menu-burger');
const mobileMenu = document.querySelector('.mob-menu');
const popUp = document.querySelector('.pop-up');
let activeElem = null;

const handleShowPopUp = e => {
   e.preventDefault();

   console.log(e.target.nodeName);
   if (e.target.nodeName === 'DIV') {
      if (activeElem) {
         activeElem.classList.remove('active');
      }
      popUp.classList.add('visually-hidden');
   }

   if (e.target.nodeName !== 'P') {
      return;
   }
   if (e.target.parentNode.contains(popUp)) {
      e.target.classList.add('active');
      popUp.classList.remove('visually-hidden');
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
      mobileMenu.addEventListener('click', handleShowPopUp);
   }
}
