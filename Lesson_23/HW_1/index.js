let tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];

const listElem = document.querySelector(".list");
const listItemElem = document.createElement("li");
let Id = 0;

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("data-id", `${(Id += 1)}`);
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

// put your code here

const taskInput = document.querySelector(".task-input");
const addTaskBtn = document.querySelector(".create-task-btn");
const checkbox = document.querySelectorAll(".list__item-checkbox");

const [...arrayChekBox] = checkbox;
console.log(arrayChekBox);

const addTasksInArray = (elem) => {
  if (elem.target.value === "") {
    return;
  }
  tasks.push({ text: elem.target.value, done: false });
  console.log(tasks);
};

const clearList = () => {
  while (listElem.firstChild) {
    listElem.removeChild(listElem.firstChild);
  }
  renderTasks(tasks);
};

if (localStorage.getItem("ListTodo")) {
  tasks = JSON.parse(localStorage.getItem("ListTodo"));
  clearList();
}

const addNewTask = () => {
  if (taskInput.value === "") {
    return;
  }
  const newTodo = {
    text: taskInput.value,
    done: false,
  };
  tasks.unshift(newTodo);
  localStorage.setItem("ListTodo", JSON.stringify(tasks));
  taskInput.value = "";
  clearList();
};

addTaskBtn.addEventListener("click", addNewTask);

const markAsDone = (event) => {
  const checkId = event.target.getAttribute("data-id");
  console.log(checkId);
  const textListItem = document
    .querySelector('[data-id="' + checkId + '"]')
    .closest(".list__item").textContent;

  tasks.forEach((item) => {
    if (item.text === textListItem) {
      // eslint-disable-next-line no-param-reassign
      item.done = !item.done;
      localStorage.setItem("ListTodo", JSON.stringify(tasks));
      console.log(item);
    }
  });

  clearList();
  console.log(tasks);
};

listElem.addEventListener("change", markAsDone);
