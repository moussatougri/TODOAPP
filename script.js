//Selectoren
const todoList = document.querySelector(".todo-list");
const input = document.querySelector(".todos-input");
const doneTodoInput = document.querySelector(".done-todos");
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
  //add class to newItem
  newItem.classList.add("open");

  //set Attribute checked
  newItem.setAttribute("data-checked", "false");

  //checkbox in li element
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.addEventListener("change", udateAttributefromLiElement);

  //delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "X";
  deleteBtn.classList.add("trash-btn");
  deleteBtn.addEventListener("click", deleteTodo);

  //push newItem in an array
  arrayOfAllTodos.push(newItem);

  //appendChild
  newItem.appendChild(checkbox);
  newItem.appendChild(deleteBtn);
  todoList.appendChild(newItem);
}

//update attribute
function udateAttributefromLiElement(e) {
  arrayOfAllTodos.forEach(function (todo) {
    if (e.target.checked === true) {
      todo.setAttribute("data-checked", "true");
      todo.classList.remove("open");
      todo.classList.add("checked");
    } else {
      todo.removeAttribute("data-checked");
      todo.classList.remove("checked");
      todo.setAttribute("data-checked", "false");
    }
  });
  udateTodosInAnArray();
}

//delete Item
function deleteTodo(e) {
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    //delete item from the window
    const todo = item.parentElement;
    todo.remove();
    //delete item from an array
    let index = 1;
    arrayOfAllTodos.splice(index, 1);
  }
}

function udateTodosInAnArray() {
  //update array of all Todos
  arrayOfAllTodos.forEach((element, index) => {
    arrayOfAllTodos[index] = element;
  });
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
