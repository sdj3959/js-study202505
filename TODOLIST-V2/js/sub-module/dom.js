// ======= DOM 가져오기 ======== //
const $todoForm = document.getElementById('todo-form');
const $todoInput = document.getElementById('todo-input');
const $todoList = document.getElementById('todo-list');
const $todosLeftCount = document.getElementById('todos-left-count');
const $filters = document.querySelector('.filters');
const $clearCompletedBtn = document.getElementById('clear-completed');

export default {
  $todoForm,
  $todoList,
  $todosLeftCount,
  $todoInput,
  $filters,
  $clearCompletedBtn,
}