'use strict';
import * as config from './config.js';

const state = {
  renderTodo: {},
  editedTodo: {},
  todoList: [],
  currentID: config.DEFAULT_ID,
};

// Add todos
const createTodos = function (todoData) {
  console.log(state.currentID);
  state.todoList.push({ todo: todoData, id: ++state.currentID });
  state.renderTodo = { todo: todoData, id: state.currentID };
  storeTodos();

  // TODO Store todo in localStorage
  console.log(state.currentID);
};

// Store ID
const createCurrentID = function (currID) {
  state.currentID = currID;
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
  state.todoList = state.todoList.filter(todoData => todoData.id !== +id);
  storeTodos();
  console.log(state);
};

// Store in localStorage API
const storeTodos = function () {
  try {
    localStorage.setItem('todos', JSON.stringify(state.todoList));
  } catch (err) {
    // Throw Error
  }
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
