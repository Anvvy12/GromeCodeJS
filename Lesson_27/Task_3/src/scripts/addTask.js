import { setItem, getItem } from "./storage.js";
import { refreshList } from "./index.js";

const taskInput = document.querySelector(".task-input");
export const addNewTask = () => {
  if (taskInput.value === "") {
    return;
  }
  const newTodo = {
    text: taskInput.value,
    done: false,
  };
  tasks.unshift(newTodo);
  newTodo.id = tasks.length;
  refreshList();
};
