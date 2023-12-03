import './styles.css';

import { Todo, TodoList } from './classes';
import { createTodoHtml, createCountHtml } from './js/components';

export const todoList = new TodoList();

todoList.todos.forEach(createTodoHtml);
createCountHtml();

console.log('todos', todoList.todos);
console.log('countTodo', todoList.countTodo());
