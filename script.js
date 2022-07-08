//Selectoren
const todoList = document.querySelector(".todo-list");
const input = document.querySelector(".todos-input");
const allDoneTodosInp = document.querySelector(".done-todos");
const sectionOfFilterTodo = document.querySelector(".filter-todos");
//Array of all todos
let arrayOfAllTodos = [];

function createTodo() {
  //create li element
  let newItem = document.createElement("li");
  //put text on the new Item
  newItem.innerText = input.value;

  // delete Input field
  input.value = "";

  newItem.classList.add("open");

  //checkbox in li element
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

  checkbox.addEventListener("click", udateChecked);

  //set Attribute checked
  newItem.setAttribute("checked", "false");

  //push newItem in an array
  arrayOfAllTodos.push(newItem);

  //appendChild
  newItem.appendChild(checkbox);
  todoList.appendChild(newItem);
}

//update attribute
function udateChecked(e) {
  arrayOfAllTodos.forEach(function (todo) {
    if (e.target.checked === true) {
      todo.setAttribute("checked", "true");
      todo.classList.remove("open");
      todo.classList.add("checked");
    } else {
      todo.removeAttribute("checked");
      todo.classList.remove("checked");
      todo.setAttribute("checked", "false");
    }
  });
  udateTodosInAnArray();
}

function udateTodosInAnArray() {
  //update array of all Todos
  arrayOfAllTodos.forEach((element, index) => {
    arrayOfAllTodos[index] = element;
  });
  console.log(arrayOfAllTodos);
}

function filterAllDoneTodos(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      //filter all todos
      case "all":
        todo.style.display = "list-item";
        break;
      //filter all complete todos
      case "done":
        if (todo.classList.contains("checked")) {
          todo.style.display = "list-item";
        } else {
          todo.style.display = "none";
        }
        break;
      //filter all uncomplete todos
      case "open":
        if (todo.classList.contains("open")) {
          todo.style.display = "list-item";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

//all EventListener in an function
function eventListener() {
  //press enter EventListener
  input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      createTodo();
    }
  });

  sectionOfFilterTodo.addEventListener("click", filterAllDoneTodos);
}

eventListener();
