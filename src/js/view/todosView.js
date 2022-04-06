import View from './View.js';
import previewView from './previewView.js';

class TodosView extends View {
  _parentEl = document.querySelector('.todos');
  _todosArr;

  // Push the current Id number to model to store in state
  getCurrentID(handler) {
    window.addEventListener(
      'load',
      this._getCurrentIDMethod.bind(this, handler)
    );
  }

  loadTodos(handler) {
    window.addEventListener('load', handler);
  }

  _getCurrentIDMethod(handler) {
    const todosArray = [...this._parentEl.children];
    const idArr = [];

    if (todosArray.length === 0) {
      return handler();
    }

    todosArray.forEach(todoEl => idArr.push(+todoEl.dataset.idNumber));
    if (idArr.length === 0) return;
    const maxID = idArr.reduce((acc, id) => {
      if (acc > id) return acc;
      if (acc < id) return id;
    });

    // Pushes the current id to the state
    handler(maxID);
  }

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

  _generateMarkUpArr() {
    return this._data
      .map(todoData => previewView.render(todoData, false))
      .join('');
  }
}

export default new TodosView();
