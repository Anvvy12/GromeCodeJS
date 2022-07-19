let tasks = [];
tasks = JSON.parse(localStorage.getItem("taskList"));

const listElem = document.querySelector(".list");

const taskInput = document.querySelector(".task-input");
const addTaskBtn = document.querySelector(".create-task-btn");
const checkbox = document.querySelectorAll(".list__item-checkbox");

const createElem = () => {};

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ id, text, done }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("data-id", id);
      checkbox.checked = done;
      checkbox.classList.add("list__item-checkbox");
      if (done) {
        listItemElem.classList.add("list__item_done");
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

const refreshList = () => {
  while (listElem.firstChild) {
    listElem.removeChild(listElem.firstChild);
  }
  taskInput.value = "";
  renderTasks(tasks);
};

function updateTaskHandler(event) {
  if (!event.target.classList.contains("list__item-checkbox")) {
    return;
  }
  // eslint-disable-next-line prefer-destructuring
  const id = event.target.dataset.id;

  tasks.forEach((item) => {
    if (item.id === +id) {
      // eslint-disable-next-line no-param-reassign
      item.done = !item.done;
    }
  });
  localStorage.setItem("taskList", JSON.stringify(tasks));
  refreshList();
}

listElem.addEventListener("click", updateTaskHandler);

const addNewTask = () => {
  if (taskInput.value === "") {
    return;
  }
  const newTodo = {
    text: taskInput.value,
    done: false,
  };
  tasks.unshift(newTodo);
  newTodo.id = tasks.length;
  localStorage.setItem("taskList", JSON.stringify(tasks));
  refreshList();
};

addTaskBtn.addEventListener("click", addNewTask);
