const elemDiv = document.querySelector(".rect_div");
const elemP = document.querySelector(".rect_p");
const elemSpan = document.querySelector(".rect_span");

const attachBtn = document.querySelector(".attach-handlers-btn");
const removeBtn = document.querySelector(".remove-handlers-btn");
const clearBtn = document.querySelector(".clear-btn");
// Clear ------
const clearList = () => {
  const eventListItem = document.querySelector(".events-list");
  while (eventListItem.firstChild) {
    eventListItem.removeChild(eventListItem.firstChild);
  }
};

// Clear ------
// uotPut --------
const logTarget = (text, color) => {
  const eventListItem = document.querySelector(".events-list");
  eventListItem.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};

// uotPut ----------------

const logGreyDiv = logTarget.bind(null, "DIV", "green");
const logGreyP = logTarget.bind(null, "P", "green");
const logGreySpan = logTarget.bind(null, "SPAN", "green");
const logGreenDiv = logTarget.bind(null, "DIV", "grey");
const logGreenP = logTarget.bind(null, "P", "grey");
const logGreenSpan = logTarget.bind(null, "SPAN", "grey");

const removeBtnFunc = () => {
  elemDiv.removeEventListener("click", logGreyDiv);
  elemSpan.removeEventListener("click", logGreySpan);
  elemP.removeEventListener("click", logGreyP);

  elemDiv.removeEventListener("click", logGreenDiv, true);
  elemSpan.removeEventListener("click", logGreenSpan, true);
  elemP.removeEventListener("click", logGreenP, true);
};

const attachFunc = () => {
  elemDiv.addEventListener("click", logGreyDiv);
  elemSpan.addEventListener("click", logGreySpan);
  elemP.addEventListener("click", logGreyP);

  elemDiv.addEventListener("click", logGreenDiv, true);
  elemSpan.addEventListener("click", logGreenSpan, true);
  elemP.addEventListener("click", logGreenP, true);
};

const removeAllList = clearList.bind(null);
clearBtn.addEventListener("click", removeAllList);

const lockBtn = removeBtnFunc.bind(null);
removeBtn.addEventListener("click", lockBtn);

const attach = attachFunc.bind(null);
attachBtn.addEventListener("click", attach);

attach();
