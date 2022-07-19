import { renderTasks } from "./renderTask.js";
import { addNewTask } from "./addTask.js";
import { setItem, getItem } from "./storage.js";

const listElem = document.querySelector(".list");

const taskInput = document.querySelector(".task-input");
const addTaskBtn = document.querySelector(".create-task-btn");
const checkbox = document.querySelectorAll(".list__item-checkbox");

renderTasks(getItem);

export const refreshList = () => {
  while (listElem.firstChild) {
    listElem.removeChild(listElem.firstChild);
  }
  taskInput.value = "";
  renderTasks(getItem);
};

function updateTaskHandler(event) {
  if (!event.target.classList.contains("list__item-checkbox")) {
    return;
  }
  const id = event.target.dataset.id;

  getItem.forEach((item) => {
    if (item.id === +id) {
      // eslint-disable-next-line no-param-reassign
      item.done = !item.done;
    }
  });
  refreshList();
}

listElem.addEventListener("click", updateTaskHandler);

addTaskBtn.addEventListener("click", addNewTask);
