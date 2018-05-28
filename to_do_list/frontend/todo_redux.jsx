import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';

import { receiveTodos,
          receiveTodo,
          RECEIVE_TODO,
          RECEIVE_TODOS} from './actions/todo_actions';
import App from './components/app.jsx';
import Root from './components/root';
import { allTodos } from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('content');
  const store = configureStore();

  window.store = store;
  window.receiveTodo = receiveTodo;
  window.RECEIVE_TODO = RECEIVE_TODO;
  window.receiveTodos = receiveTodos;
  window.RECEIVE_TODOS = RECEIVE_TODOS;
  window.allTodos = allTodos;

  ReactDOM.render(<Root store={store}/>, rootEl);
});
