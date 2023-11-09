const todoTitle = document.querySelector("#todoTitleInp");
const todotodo = document.querySelector("#todoDateInp");
const addTodo = document.querySelector("#addTodoBtn");
const displayTodo = document.querySelector("#displayTodosBtn");
const todoList = document.querySelector(".todoListDisplay");

const tabliczka = [];
const form = document.querySelector(`form`);
addTodoBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  const ob = {
    Name: todoTitle.value,
    Date: todotodo.value,
  };

  const li = document.createElement("li");
  li.innerHTML = `nazwa:  ${ob.Name}, data: ${ob.Date}`;
  tabliczka.push(ob);

  todoList.append(li);
  form.reset();
  todoTitle.focus();
});
