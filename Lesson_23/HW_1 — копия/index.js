const tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];

const taskList = document.querySelector(".list");

const taskInput = document.querySelector(".task-input");
const addTaskBtn = document.querySelector(".create-task-btn");
const checkbox = document.querySelectorAll(".list__item-checkbox");

let displayMessage = "";

function renderTasks() {
  tasks.forEach((item, index) => {
    displayMessage += `
    <li class="list__item">
    <input type="checkbox" id="item__${index}">
    <label for="item__${index}">${item.text}</label>
    </li>`;
    if (item.done) {
      displayMessage.classList.add("list__item_done");
    }
    taskList.innerHTML += displayMessage;
  });
}

const addNewTask = () => {
  const newTodo = {
    text: taskInput.value,
    done: false,
  };
  tasks.unshift(newTodo);
  renderTasks();
};

addTaskBtn.addEventListener("click", addNewTask);

renderTasks();
