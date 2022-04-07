'use strict';
import * as config from './config.js';

// TODO add checkmark on localStorage API
const state = {
  renderTodo: {},
  editedTodo: {},
  todoList: [],
  currentID: config.DEFAULT_ID,
};

// Add todos
const createTodos = function (todoData) {
  state.todoList.push({ todo: todoData, id: ++state.currentID });
  state.renderTodo = { todo: todoData, id: state.currentID };
  storeTodos();
};

// Store ID
const createCurrentID = function (currID) {
  if (currID) {
    // CurrID will set if there is an child element on the hardcoded HTML Todos
    return (state.currentID = currID);
  }

  if (state.todoList.length === 0) return;
  const maxID = state.todoList
    .map(todoData => todoData.id)
    .reduce((acc, id) => {
      if (acc > id) return acc;
      if (acc < id) return id;
    });

  state.currentID = maxID;
};

// Edit todos in state
const editTodos = function (editData) {
  const editingData = state.todoList.find(
    data => data.id === +editData.editedID
  );

  if (!editingData) return;
  editingData.todo = editData.editedData;
  state.editedTodo.renderTodo = editingData;
  state.editedTodo.editedEl = editData.editedEl;
  storeTodos();
};

// Delete todos in state
const deleteTodos = function (id) {
  const indexToDelete = state.todoList.findIndex(
    todoData => todoData.id === +id
  );
  state.todoList.splice(indexToDelete, 1);

  storeTodos();
};

// Store in localStorage API
const storeTodos = function () {
  localStorage.setItem('todos', JSON.stringify(state.todoList));
};

const init = function () {
  const storage = localStorage.getItem('todos');
  const data = JSON.parse(storage);

  if (!data) return;
  state.todoList = data;

  // For dev purposes only
  // localStorage.clear();
};

init();

export { state, createCurrentID, createTodos, editTodos, deleteTodos };
