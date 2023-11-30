import './styles.css';

import { Todo, TodoList } from './classes';
import { createTodoHtml } from './js/components';

export const todoList = new TodoList();

todoList.todos.forEach(createTodoHtml);

console.log('todos', todoList.todos);
