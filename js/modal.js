const refs = {
   openModalBtn: document.querySelector('[data-modal-open]'),
   closeModalBtn: document.querySelector('[data-modal-close]'),
   modal: document.querySelector('[data-modal]'),
   backdrop: document.querySelector('[data-backdrop]'),
};

refs.closeModalBtn.addEventListener('click', toggleModal);
refs.openModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
   refs.modal.classList.toggle('is-hidden');
   document.body.classList.toggle('modal-open');
}
