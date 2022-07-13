//Selektoren
const list = document.querySelector(".todo-list");
const todoText = document.querySelector(".todos-input");
const addBtn = document.querySelector(".add-button");
const sectionOfFilterTodo = document.querySelector(".filter-todos");

//state of Todos
const state = {
  filter: "all",
  todos: [],
};

function renderTodo() {
  const newLi = document.createElement("li");
  const todoDesc = document.createTextNode(todoText.value);
  newLi.classList.add("open");

  const checkbock = document.createElement("input");
  checkbock.type = "checkbox";
  checkbock.classList.add("checkbox");

  state.todos.push({ description: todoText.value, done: false });

  state.todos.forEach(function (todo) {
    newLi.todoObj = todo;
  });

  saveLocalTodos({ description: todoText.value, done: false });

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("trash-btn");
  deleteBtn.addEventListener("click", deleteTodo);

  todoText.value = "";

  newLi.appendChild(todoDesc);
  newLi.appendChild(checkbock);
  newLi.appendChild(deleteBtn);
  list.appendChild(newLi);
}

function udateState(e) {
  const checkbock = e.target;
  const liElement = checkbock.parentElement;
  const todo = liElement.todoObj;
  todo.done = checkbock.checked;
  if (todo.done === true) {
    liElement.classList.remove("open");
    liElement.classList.add("checked");
  } else {
    liElement.classList.remove("checked");
    liElement.classList.add("open");
  }
}

function checkLocalTodos() {
  if (localStorage.getItem("todos") === null) {
    state.todos;
  } else {
    state.todos = JSON.parse(localStorage.getItem("todos"));
  }
}

//save todo in localstorage
function saveLocalTodos(todo) {
  checkLocalTodos();
  state.todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(state.todos));
}

function getTodos() {
  checkLocalTodos();
  state.todos.forEach(function (todo) {
    let newLi = document.createElement("li");
    const todoDesc = document.createTextNode(todo.description);
    newLi.classList.add("open");

    const checkbock = document.createElement("input");
    checkbock.type = "checkbox";
    checkbock.classList.add("checkbox");

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("trash-btn");
    deleteBtn.addEventListener("click", deleteTodo);

    newLi.appendChild(todoDesc);
    newLi.appendChild(checkbock);
    newLi.appendChild(deleteBtn);
    list.appendChild(newLi);
  });
}

//remove todo from localstorage

//delete Item
function deleteTodo(e) {
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    //delete item from the window
    const todo = item.parentElement;
    todo.remove();
    //delete item from an array
    const index = state.todos.findIndex(
      (x) => x.description === todo.innerText
    );
    state.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }
}

function filterTodos(e) {
  const liElement = list.childNodes;
  state.filter = e.target.value;
  liElement.forEach(function (todo) {
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

function eventListener() {
  todoText.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      renderTodo();
    }
  });
  addBtn.addEventListener("click", renderTodo);
  list.addEventListener("change", udateState);
  document.addEventListener("DOMContentLoaded", getTodos);
  sectionOfFilterTodo.addEventListener("change", filterTodos);
}

eventListener();
