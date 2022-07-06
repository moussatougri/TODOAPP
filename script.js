const ul = document.querySelector(".todo-list");
const input = document.querySelector(".todos-input");
const arrayOfAllTodos = [];
const liElement = document.createElement("li");






function listOfAllTodos() {
  const todos = input.value;
  const liText = document.createTextNode(todos);
  console.log(liElement);
  liElement.appendChild(liText);
  ul.appendChild(liElement);
  arrayOfAllTodos.push(todos)
  input.value = "";
};

function checkboxInLiElement() {
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  liElement.appendChild(checkbox)
  
  
  checkbox.addEventListener("click", function (e) {
    if (e.target.checked) {
      liElement.classList.add("checked")
    }
  
  })
};





function eventListener() {
  input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      listOfAllTodos();
      checkboxInLiElement();
    }
  });
};

eventListener();



