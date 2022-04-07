// TODO Create the model and view js
import * as model from './model.js';
import dateTimeView from './view/dateTimeView.js';
import buttonsView from './view/buttonsView.js';
import addButtonView from './view/addButtonView.js';
import todosView from './view/todosView.js';
import editedView from './view/editedView.js';

import 'core-js/stable';
import 'regenerator-runtime';
// Get current ID
const controlID = function (currID) {
  model.createCurrentID(currID);
};

// Loads LocalStorage data
const controlRender = function () {
  if (model.state.todoList.length === 0) return;

  // TODO find a way to use only render
  // todosView.render(model.state.todoList);
  todosView.renderTodoStorage(model.state.todoList);
};

// TODO Make rendering smoother
// Add Button
const controlAdd = function () {
  const todoData = addButtonView.getTodo();
  if (!todoData) return;

  // Pushes data to state
  model.createTodos(todoData);

  // Renders todo
  todosView.render(model.state.renderTodo);
};

// TODO Make the check BTN Disabled while editing
// TODO Make Transition Smoother (Z-INDEX on FLEX CHILDREN)
// Edit in Array (Pubsub Model)
// Edit save
const controlEditSubmit = function () {
  // Push edited data to model
  model.editTodos(editedView.getEditedTodo());

  // Render edited data to view
  editedView.renderEdit(model.state.editedTodo);
};

// Make delete smoother
// Delete in Array (PubSub Model)
const controlDelete = function (id) {
  model.deleteTodos(id);
};

const init = function () {
  dateTimeView.renderDateTime();
  todosView.getCurrentID(controlID);
  todosView.loadTodos(controlRender);
  addButtonView.toggleForm();
  buttonsView.checkStrike();
  buttonsView.toggleEdit();
  editedView.addHandlerEditSubmit(controlEditSubmit);
  addButtonView.addHandlerSubmit(controlAdd);
  buttonsView.addHandlerDelete(controlDelete);
};

init();
