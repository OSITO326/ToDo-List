export class Todo {
  static fromJson({ id, task, completed, createAt }) {
    const tempTodo = new Todo(task);
    tempTodo.id = id;
    tempTodo.completed = completed;
    tempTodo.createAt = createAt;
    return tempTodo;
  }
  constructor(task) {
    this.task = task;
    this.id = new Date().getTime();
    this.completed = false;
    this.createAt = new Date();
  }
}
