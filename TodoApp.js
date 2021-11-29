import Todo from "./Todo.js";

export default class TodoApp {
  #args;
  #todoList = [];

  constructor(args) {
    this.#args = args;
  }

  run() {
    if (this.#args.includes("-l")) {
      this.numberedListOfTodos();
    } else if (this.#args.includes("-a")) {
      console.log("Új feladatot ad hozzá"); //this.addTodo();
    } else if (this.#args.includes("-r")) {
      console.log("Eltávolít egy feladatot");
    } else if (this.#args.includes("-c")) {
      console.log("Teljesít egy feladatot");
    } else {
      this.printIntro();
    }
  }

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
}
