import TodoApp from "./TodoApp.js";


export default class Todo {
  description;
  

  constructor(description) {
    this.description = description;
    this.completed = false;
  }

  complete() {
    this.completed = true;
  }

  getDescription() {
    return this.description;
  }

  getCompleted() {
    return this.completed;
  }

  toString() {
    return `[${this.completed ? "x" : " "}] ${this.description}`;
  }
}
