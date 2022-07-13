const inputText = document.querySelector(".text-input");

function showText(event) {
  console.log(event.target.value);
}
const showActualText = showText.bind(null);

inputText.addEventListener("change", showActualText);
