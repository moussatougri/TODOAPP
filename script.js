const ul = document.querySelector(".todo-list");
const input = document.querySelector(".todos-input");
const allDoneTodosInp = document.querySelector(".done-todos");
let arrayOfAllTodos = [];
let arrayOfDoneTodos = [];

function createTodo() {
  //create li element
  let newItem = document.createElement("li");
  //put text on the new Item
  newItem.innerText = input.value;

  // delete Input field
  input.value = "";

  //checkbox in li element
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

  //set Attribute checked
  newItem.setAttribute("checked", "false");

  arrayOfAllTodos.push(newItem);
  //
  checkbox.addEventListener("change", function (e) {
    if (e.target.checked === true) {
      newItem.setAttribute("checked", "true");
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
  ul.appendChild(newItem);
}

//all EventListener in an function
function eventListener() {
  //press enter EventListener
  input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      createTodo();
    }
  });
}

eventListener();
