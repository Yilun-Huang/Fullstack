import { todoApi } from "./todoApis.js";

/*
Given an Api, implement a todo app(features includes Add a todo, Change a todo Status, Delete Todo) in Vanilla JavaScript. 
FYI: You can add some css styles you want.
*/

//implement your app here
let todoItems = [];
const todoList = document.getElementById("todoList");

// Define showTodos function
const showTodos = async () => {
  todoList.textContent = "";
  const response = await todoApi.getAllTodos();
  todoItems = response.todos;

  todoItems.forEach((todoItem, index) => {
    const todoListItem = document.createElement("li");
    todoListItem.className = "todoListItem";
    const todoListItemSpan = document.createElement("span");
    todoListItemSpan.textContent = todoItem.content;

    // Make sure every time we execute showTodos, completed todos have a line-through
    if (todoItem.isCompleted) {
      todoListItemSpan.className = "todoItemDeleted";
    } else {
      todoListItemSpan.className = "todoItemUndeleted";
    }

    // Add on dblclick event for the todo items
    todoListItemSpan.addEventListener("dblclick", async () => {
      await todoApi.modTodo(index);
      console.log(todoItem);
      if (todoItem.isCompleted) {
        todoListItemSpan.className = "todoItemDeleted";
      } else {
        todoListItemSpan.className = "todoItemUndeleted";
      }
    });

    todoListItem.append(todoListItemSpan);
    todoList.append(todoListItem);
    const deleteTodo = document.createElement("button");
    deleteTodo.textContent = "Delete Todo";
    deleteTodo.className = "deleteButton";

    // Add on click event for the delete buttons
    deleteTodo.addEventListener("click", async () => {
      await todoApi.delTodo(index);

      showTodos();
      console.log(todoItems);
    });
    todoListItem.append(deleteTodo);
  });
};

showTodos();

const input = document.getElementById("input");
const addTodo = document.getElementById("addTodo");

// Add on click event for the add button
addTodo.onclick = async () => {
  const todoItem = { content: input.value, isCompleted: false };
  await todoApi.addTodo(todoItem);
  showTodos();
  input.value = "";
  input.focus();
};
