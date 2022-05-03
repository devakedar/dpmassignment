// Add the ID number on HTML
import View from './View.js';

class AddButtonView extends View {
  _parentEl = document.querySelector('.to-do-list');

  getTodo() {
    const todo = this._parentEl.querySelector('.form__input').value;
    this._toggle();
    return todo;
  }

  addHandlerSubmit(handler) {
    this._parentEl.querySelector('.form--add').addEventListener('submit', e => {
      e.preventDefault();

      // Renders todo
      handler();
    });
  }

  toggleForm() {
    this._parentEl.addEventListener('click', this._showForm.bind(this));
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        document.querySelector('.btn__add').classList.remove('hidden');
        document.querySelector('.form__container').classList.add('hidden');
        document.querySelector('.form__input').value = '';
      }
    });
  }

  _showForm(e) {
    e.preventDefault();
    const addBTN = e.target.closest('.btn__add');

    if (!addBTN) return;
    this._toggle();

    // Input Focus
    setTimeout(() => {
      this._parentEl.querySelector('.form__input').focus();
    }, 300);
  }

  _toggle() {
    this._parentEl.querySelector('.form__container').classList.toggle('hidden');

    this._parentEl.querySelector('.btn__add').classList.toggle('hidden');
    this._parentEl.querySelector('.form__input').value = '';
  }
}

export default new AddButtonView();
