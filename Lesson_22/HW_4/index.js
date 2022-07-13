const input = document.querySelector(".search__input");
const LogBtn = document.querySelector(".search__btn");

const outputText = () => console.log(input.value);
LogBtn.addEventListener("click", outputText);
