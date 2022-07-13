const input = document.querySelector(".search__input");
const LogBtn = document.querySelector(".search__btn");

const inputText = input.addEventListener("change", () =>
  console.log(input.value)
);

LogBtn.addEventListener("click", inputText);
