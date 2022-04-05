import View from './View.js';

class PreviewView extends View {
  _parentEl = '';

  _generateMarkUp() {
    return `
              <li data-id-number="${this._data.id}" class="todo__elem">
                <div class="todo__elem_box">
                  <button class="btn btn__check">
                    <ion-icon class="btn__icon" name="checkmark-outline"></ion-icon>
                  </button>

                  <p class="todo__content">${this._data.todo}</p>

                  <!-- Edit Form -->
                  <div class="edit-form__container display-none">
                    <form class="edit-form">
                      <textarea class="edit-text form__input margin-reset" cols="20" rows="4"
                        spellcheck="true"></textarea>

                      <button class="btn btn__submit">
                        <ion-icon class="btn__icon" name="save-outline"></ion-icon>
                      </button>
                    </form>
                  </div>
                </div>


                <div class="todo__elem_box">
                  <button class="btn btn__edit">
                    <ion-icon class="btn__icon" name="pencil-outline"></ion-icon>
                  </button>

                  <button class="btn btn__delete">
                    <ion-icon class="btn__icon" name="trash-outline"></ion-icon>
                  </button>
                </div>
              </li>`;
  }
}

export default new PreviewView();
