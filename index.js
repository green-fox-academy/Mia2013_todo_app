import TodoApp from "./TodoApp.js";
import Todo from "./Todo.js";
import fs from 'fs';

const argumentValues = process.argv.slice(2);
const todoApp = new TodoApp(argumentValues);
const fileContent = fs.readFileSync('todos.json', 'utf-8');
const parsedJSON = JSON.parse(fileContent);


todoApp.init(parsedJSON);
todoApp.run();

