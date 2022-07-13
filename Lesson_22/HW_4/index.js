const LogBtn = document.querySelector(".search__btn");

function outputText() {
  const input = document.querySelector(".search__input");
  input.addEventListener("change", () => console.log(input.value));
}

LogBtn.addEventListener.bind("click", outputText());
