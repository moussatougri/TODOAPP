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






function eventListener() {
  input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      listOfAllTodos();
    }
  });
};

eventListener();



