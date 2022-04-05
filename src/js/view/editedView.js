import View from './View.js';

class EditedView extends View {
  _parentEl = document.querySelector('.todos');
  _editedData;
  _editedID;
  _editedEl;

  getEditedTodo() {
    return {
      editedData: this._editedData,
      editedID: this._editedID,
      editedEl: this._editedEl,
    };
  }

  addHandlerEditSubmit(handler) {
    this._parentEl.addEventListener('click', e => {
      e.preventDefault();
      const click = e.target;

      const editSubmitBTN = click.closest('.btn__submit');

      if (!editSubmitBTN) return;
      const editedDataForm = editSubmitBTN.previousElementSibling;
      // save edited data
      const editedData = editedDataForm.value;

      // Store edited ID
      const id = editSubmitBTN.closest('.todo__elem').dataset.idNumber;

      this._editedData = editedData;
      this._editedID = id;
      this._editedEl = editSubmitBTN.closest('.todo__elem_box');

      // render edited data
      this._clear();
      handler();
    });
  }

  _generateMarkUp() {
    return ` <button class="btn btn__check">
                    <ion-icon class="btn__icon" name="checkmark-outline"></ion-icon>
                  </button>

                  <p class="todo__content">${this._editedData.renderTodo.todo}</p>

                  <!-- Edit Form -->
                  <div class="edit-form__container display-none">
                    <form class="edit-form">
                      <textarea class="edit-text form__input margin-reset" cols="20" rows="4"
                        spellcheck="true"></textarea>

                  <button class="btn btn__submit">
                    <ion-icon class="btn__icon" name="save-outline"><ion-icon>
                  </button>
                </form>
            `;
  }

  _clear() {
    this._editedEl.innerHTML = '';
  }
}

export default new EditedView();
