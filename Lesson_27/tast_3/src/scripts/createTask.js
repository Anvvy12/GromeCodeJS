import { renderTasks } from "./renderTask";
import { getItem, setItem } from "./storage";

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector(".task-input");
  const text = taskTitleInputElem.value;
  if (!text) {
    return;
  }

  taskTitleInputElem.value = "";
  const taskList = getItem("tasksList") || [];
  const newTasksList = taskList.concat({
    text,
    done: false,
    id: Math.random().toString(),
  });
  setItem("tasksList", newTasksList);

  renderTasks();
};
