const ul = document.querySelector(".todo-list");
const input = document.querySelector(".todos-input");
const allDoneTodosInp = document.querySelector(".done-todos")
const arrayOfAllTodos = [];
const arrayOfDoneTodos = [];







class Todo {
  constructor(todo) {
    this.todos = todo;
    this.checked = false;
    this.createTodo()
  }
  createTodo() {
    //create li element
    const liElement = document.createElement("li");
    const liText = document.createTextNode(this.todos);
    liElement.appendChild(liText);
    ul.appendChild(liElement);
    arrayOfAllTodos.push(liText)
    input.value = "";

    //checkbox in li element
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    liElement.appendChild(checkbox)


    checkbox.addEventListener("click", function (e) {
      if (e.target.checked) {
        this.checked = this.checked !== false;
      }
      else {
        this.checked = this.checked !== false;
      }
    })
  }
}

//class in an function
function newTodo() {
  new Todo(input.value);
}




//all EventListener in an function
function eventListener() {
  //press enter EventListener
  input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      newTodo() 
    }
  });
}

eventListener()