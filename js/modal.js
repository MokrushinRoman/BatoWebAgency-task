const refs = {
   openModalBtn: document.querySelector('[data-modal-open]'),
   closeModalBtn: document.querySelector('[data-modal-close]'),
   modal: document.querySelector('[data-modal]'),
   backdrop: document.querySelector('[data-backdrop]'),
   body: document.querySelector('body'),
};

refs.backdrop.addEventListener('click', closeModal);

refs.openModalBtn.addEventListener('click', openModal);

function keyboardClose(e) {
   console.log(e.code);
   if (e.code !== 'Escape') {
      return;
   }
   refs.modal.classList.add('is-hidden');
   document.body.classList.remove('modal-open');
   window.removeEventListener('keydown', keyboardClose);
}
function closeModal(e) {
   if (
      e.target === e.currentTarget ||
      e.target === refs.closeModalBtn ||
      e.target.nodeName === 'svg'
   ) {
      refs.modal.classList.add('is-hidden');
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', keyboardClose);
   }
}
function openModal() {
   refs.modal.classList.remove('is-hidden');
   document.body.classList.add('modal-open');
   window.addEventListener('keydown', keyboardClose);
}
