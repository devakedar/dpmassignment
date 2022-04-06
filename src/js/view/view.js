'use strict';

export default class View {
  //  Check if you can use _data only
  _data;
  _editedData;
  _todoArr;

  // Renders data
  render(data, render = true) {
    // Throw an error if you can
    if (!data || (Array.isArray(data) && data.length === 0)) return;
    this._data = data;
    const html = this._generateMarkUp();

    if (!render) return html;
    this._parentEl.insertAdjacentHTML('afterbegin', html);
  }

  renderEdit(data) {
    this._editedData = data;

    const html = this._generateMarkUp();
    this._editedData.editedEl.insertAdjacentHTML('afterbegin', html);
  }

  // TODO merge render and render TodoStorage
  renderTodoStorage(data) {
    if (!data) return;
    this._data = data;

    if (!this._data) return;
    const html = this._generateMarkUpArr();
    this._parentEl.insertAdjacentHTML('afterbegin', html);
  }
}
