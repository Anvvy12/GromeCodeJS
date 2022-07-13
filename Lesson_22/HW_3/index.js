const checkBox = document.querySelector(".task-status");
checkBox.addEventListener("click", () =>
  console.log(checkBox.checked, checkBox.value)
);
