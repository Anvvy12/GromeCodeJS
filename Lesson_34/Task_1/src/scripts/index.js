import { initTodoListHandlers } from "./todoList.js";
import { renderTasks } from "./renderTask.js";
import { getTasksList } from "./tasksGateWay.js";
import { setItem } from "./storage.js";

document.addEventListener("DOMContentLoaded", () => {
  getTasksList().then((tasksList) => {
    setItem("tasksList", tasksList);
    renderTasks();
  });

  initTodoListHandlers();
});

const onStorageChange = (e) => {
  if (e.key === "tasksList") renderTasks();
};

window.addEventListener("storage", onStorageChange);
