const inputText = document.querySelector(".task-status");

function showText(event) {
  console.log(event.target.checked);
}
const showActualText = showText.bind(null);

inputText.addEventListener("change", showActualText);
