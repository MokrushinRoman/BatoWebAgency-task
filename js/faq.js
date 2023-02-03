const questionsList = document.querySelector('.faq__list');

const handleShowAnswer = e => {
   console.log(e.target.nodeName);

   if (e.target.nodeName === 'svg' || e.target.nodeName === 'use') {
      const parentCard = e.target.closest('.faq__item');
      const parentCardTitle = parentCard.querySelector('h3');
      const parentCardSubtitle = parentCard.querySelector('b');
      const parentCardText = parentCard.querySelector('p');

      parentCard.classList.toggle('closed');
      parentCard.classList.toggle('border-box');
      parentCard.classList.toggle('box');
      parentCardTitle.classList.toggle('visually-hidden');
      parentCardSubtitle.classList.toggle('visually-hidden');
      parentCardText.classList.toggle('visually-hidden');

      return;
   }
};

questionsList.addEventListener('click', handleShowAnswer);
