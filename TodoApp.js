import Todo from "./Todo.js";
import fs from "fs";

export default class TodoApp {
  #args;
  #todoList = [];
  #listOfArguments = ["-l", "-a", "-r", "-c"];


  constructor(args) {
    this.#args = args;
  }

  run() {
    if (this.#args.includes(this.#listOfArguments[0])) {
      this.numberedListOfTodos();
    } else if (this.#args.includes(this.#listOfArguments[1])) {
      this.addTodo(this.#args[1]);
    } else if (this.#args.includes(this.#listOfArguments[2])) {
      this.removeTodo(this.#args[1]);
    } else if (this.#args.includes(this.#listOfArguments[3])) {
      console.log("Teljesít egy feladatot");     
    } else if (this.#args[1] === undefined){
      this.printIntro();
    }  else {
      console.log("Nem támogatott argumentum!");
      this.printIntro();
  }}

  printIntro() {
    const intro = `
Parancssori Todo applikáció
=============================
                
Parancssori argumentumok:
    -l   Kilistázza a feladatokat
    -a   Új feladatot ad hozzá
    -r   Eltávolít egy feladatot
    -c   Teljesít egy feladatot`;
    console.log(intro);
  }

  init(rawTodos) {
    rawTodos.forEach((element) => {
      this.#todoList.push(new Todo(element));
    });
  }

  numberedListOfTodos() {
    if (this.#todoList.length === 0) {
      console.log("Nincs mára tennivalód! :)");
    } else {
      for (let i = 0; i < this.#todoList.length; i++) {
        const todosFromList = this.#todoList[i].description;
        console.log(`${i + 1} - ${todosFromList}`);
      }
    }
  }

  addTodo(todo) {
    if (todo === undefined) {
      console.log(
        "Nem lehetséges új feladat hozzáadása: nincs megadva a feladat!"
      );
    } else {
      let fileContent = fs.readFileSync("todos.json", "utf-8");
      let users = JSON.parse(fileContent);
      users.push(todo);
      fileContent = JSON.stringify(users);
      fs.writeFileSync("todos.json", fileContent, "utf-8");
    }
  }

  removeTodo(number) {
    if (number === undefined) {
      console.log("Nem lehetséges az eltávolítás: nem adott meg indexet!");
    } else if(isNaN(number)){
      console.log("Nem lehetséges az eltávolítás: a megadott index nem szám! ");

    }else {
      let fileContent = fs.readFileSync("todos.json", "utf-8");
      let users = JSON.parse(fileContent);
      if (users.length < number) {
        console.log(
          "Nem lehetséges az eltávolítás: túlindexelési probléma adódott!"
        );
      } else {
        users.splice(number, 1);
        fileContent = JSON.stringify(users);
        fs.writeFileSync("todos.json", fileContent, "utf-8");
      }
    }
  }

 


}
