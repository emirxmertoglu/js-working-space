const todos = ["Learn React", "Learn Dotnet", "Write Medium Article"];

const addTodo = (todo) => {
  todos.push(todo);
  console.log("Todo added:", todo);
};

const listTodos = () => {
  console.log("My to do list:", todos);
};

const deleteTodo = (todo) => {
  const index = todos.indexOf(todo);
  if (index > -1) {
    todos.splice(index, 1);
    console.log("Todo deleted:", todo);
    console.log("My to do list:", todos);
  } else {
    console.log("Todo not found:", todo);
  }
};

const updateTodo = (target, value) => {
  const index = todos.indexOf(target);
  if (index > -1) {
    todos[index] = value;
    console.log("Todo updated:", value);
    console.log("My to do list:", todos);
  } else {
    console.log("Todo not found:", target);
  }
};

addTodo("Learn React hooks");
listTodos();
deleteTodo("Learn Dotnet");
deleteTodo("Learn Dotnet"); // if its not a valid todo
updateTodo("Write Medium Article", "Do a todo app for JS Workshop");
updateTodo("Write Medium Article", "Do a todo app for JS Workshop"); // if its not a valid todo
