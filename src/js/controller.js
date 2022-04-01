'use strict';
// DOM ELEMENTS
const addBTN = document.querySelector('.btn__add');
const addBTNContainer = document.querySelector('.add__container');
const todoForm = document.querySelector('.form');
const todoFormContainer = document.querySelector('.form__container');
const editFormContainer = document.querySelector('.edit-form__container');
const editForm = document.querySelector('.edit-text');
const todoInput = document.querySelector('.form__input');
const todoContent = document.querySelector('.todo__content');
const date = document.querySelector('.date');
const time = document.querySelector('.time');
const todosEl = document.querySelector('.todos');
const navLocale = navigator.language;

// Shows Form
const showForm = function () {
  addBTN.classList.toggle('hidden');
  todoFormContainer.classList.toggle('hidden');
};

// Show Edit Form
const showEditForm = function (formContainer, content, formInput) {
  content.classList.toggle('display-none');
  formContainer.classList.toggle('display-none');

  formInput.value = content.textContent
    .replace(/[\n\r]+|[\s]{2,}/g, ' ')
    .trim();
};

/* ---------------------------- */
/* Event Listener */
/* ---------------------------- */

// Form and Add Button
addBTN.addEventListener('click', function () {
  addBTN.classList.toggle('hidden');
  todoFormContainer.classList.toggle('hidden');
});

todoForm.addEventListener('submit', function (e) {
  e.preventDefault();
  showForm();
  todoInput.value = '';

  // Renders To do

  // Store it in state array

  // Push in localstorage
});

window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    addBTN.classList.remove('hidden');
    todoFormContainer.classList.add('hidden');
    todoInput.value = '';
  }
});

// Check BTN (Strike Function)
todosEl.addEventListener('click', function (e) {
  const click = e.target;

  const checkBTN = click.closest('.btn__check');

  if (!checkBTN) return;
  const clickTodo = checkBTN.nextElementSibling;

  if (!clickTodo) return;
  clickTodo.classList.toggle('strike');
});

// TODO Make Transition Smoother
// Edit BTN
todosEl.addEventListener('click', function (e) {
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
    editBTN.parentElement.previousElementSibling.querySelector('.edit-text');

  if (!clickContainer && !clickContent && !clickInput) return;
  showEditForm(clickContainer, clickContent, clickInput);

  // Renders edited text

  // Find index of edited text to store in storage

  // Submit edited text
});

// Delete BTN (Delete Function)
todosEl.addEventListener('click', function (e) {
  const click = e.target;

  // Delete BTN
  const deleteBTN = click.closest('.btn__delete');

  if (!deleteBTN) return;
  // Delete element
  deleteBTN.parentNode.parentNode.remove();
  console.log(deleteBTN.parentNode.parentNode);

  // Delete in Array
});

// Date & Time
setInterval(() => {
  date.textContent = new Intl.DateTimeFormat(navLocale, {
    dateStyle: 'long',
  }).format(new Date());
  time.textContent = new Date().toLocaleTimeString();
}, 1000);

// nextElementSibling
