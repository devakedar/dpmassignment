import View from './View.js';

class Buttons extends View {
  _parentEl = document.querySelector('.todos');
  deleteID;

  checkStrike() {
    this._parentEl.addEventListener('click', function (e) {
      const click = e.target;

      const checkBTN = click.closest('.btn__check');

      if (!checkBTN) return;
      const clickTodo = checkBTN.nextElementSibling;

      if (!clickTodo) return;
      clickTodo.classList.toggle('strike');
    });
  }

  toggleEdit() {
    this._parentEl.addEventListener('click', e => {
      const click = e.target;

      const editBTN = click.closest('.btn__edit');
      if (!editBTN) return;

      const clickContainer =
        editBTN.parentElement.previousElementSibling.querySelector(
          '.edit-form__container'
        );

      const clickContent =
        editBTN.parentElement.previousElementSibling.querySelector(
          '.todo__content'
        );

      const clickInput =
        editBTN.parentElement.previousElementSibling.querySelector(
          '.edit-text'
        );

      if (!clickContainer && !clickContent && !clickInput) return;
      clickContent.classList.toggle('display-none');
      clickContainer.classList.toggle('display-none');
      clickInput.value = clickContent.textContent
        .replace(/[\n\r]+|[\s]{2,}/g, ' ')
        .trim();
    });
  }

  // Delete BTN (Delete Function)
  addHandlerDelete(handler) {
    this._parentEl.addEventListener('click', e => {
      const click = e.target;

      // Delete BTN
      const deleteBTN = click.closest('.btn__delete');

      if (!deleteBTN) return;
      // Delete element
      const id = deleteBTN.closest('.todo__elem').dataset.idNumber;
      deleteBTN.parentElement.parentElement.remove();

      // Delete Data on array
      handler(id);
    });
  }
}
export default new Buttons();
