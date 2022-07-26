import { renderTasks } from "./renderTask.js";
import { getItem, setItem } from "./storage.js";
import { updateTasks, getTasksList } from "./tasksGateWay.js";

export const onToggleTask = (e) => {
  const isCheckbox = e.target.classList.contains("list-item__checkbox");

  if (!isCheckbox) {
    return;
  }

  const taskId = e.target.dataset.id;
  const tasksList = getItem("tasksList");
  const done = e.target.checked;
  const { text } = tasksList.find((task) => task.id) === taskId;

  const updatedTask = {
    text,
    done,
  };

  updateTasks(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem("tasksList", newTasksList);
      renderTasks();
    });
};
