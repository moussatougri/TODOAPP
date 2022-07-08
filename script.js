const todoList = document.querySelector(".todo-list");
const input = document.querySelector(".todos-input");
const allDoneTodosInp = document.querySelector(".done-todos");
const sectionOfFilterTodo = document.querySelector(".filter-todos");
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

  //set Attribute checked
  newItem.setAttribute("checked", "false");

  //push newItem in an array
  arrayOfAllTodos.push(newItem);

  //change state
  checkbox.addEventListener("change", function (e) {
    if (e.target.checked === true) {
      newItem.setAttribute("checked", "true");
      newItem.classList.remove("open");
      newItem.classList.add("checked");
    } else {
      newItem.removeAttribute("checked");
      newItem.classList.remove("checked");
      newItem.setAttribute("checked", "false");
    }
    //update array of all Todos
    arrayOfAllTodos.forEach((element, index) => {
      arrayOfAllTodos[index] = element;
    });
  });

  //appendChild
  newItem.appendChild(checkbox);
  todoList.appendChild(newItem);
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

console.log(arrayOfAllTodos);

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
