const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-todo");
const list = document.getElementById("list");

addBtn.addEventListener("click", function() {
  if (input.value === "") return;
  const item = document.createElement("li");
  item.innerHTML = input.value;
  list.appendChild(item);
  input.value = "";
});