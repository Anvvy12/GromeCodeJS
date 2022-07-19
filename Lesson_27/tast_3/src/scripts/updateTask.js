import { renderTasks } from "./renderer.js";
import { getItem, setItem } from "./storage.js";

export const onToggleTask = (e) => {
  const isCheckBox = e.target.classList.contains();

  if (!isCheckBox) {
    return;
  }

  const taskList = getItem("tasksList");
  const newTaskList = taskList.map((task) => {
    if (task.id === e.target.dataset.id) {
      const done = e.target.checked;
      return {
        ...task,
        done,
      };
    }
    return task;
  });
  setItem("taskList", newTaskList);
  renderTasks();
};
