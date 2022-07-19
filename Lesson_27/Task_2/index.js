const counterElem = document.querySelector(".counter");
const counterValueElem = document.querySelector(".counter__value");

const onCounterChange = (elem) => {
  const isButton = elem.target.classList.contains("counter__button");
  if (!isButton) {
    return;
  }

  const action = elem.target.dataset.action;

  const oldValue = Number(counterValueElem.textContent);

  const newValue = action === "decrease" ? oldValue - 1 : oldValue + 1;
  counterValueElem.textContent = newValue;

  localStorage.setItem("counterValue", newValue);
};

counterElem.addEventListener("click", onCounterChange);

const onStorageChange = (e) => {
  counterValueElem.textContent = e.newValue;
};

window.addEventListener("storage", onStorageChange);
const onDocumentLoaded = () => {
  counterValueElem.textContent = localStorage.getItem("counterValue") || 0;
};

document.addEventListener("DOMContentLoaded", onDocumentLoaded);
