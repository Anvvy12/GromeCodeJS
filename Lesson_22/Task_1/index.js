const elemDiv = document.querySelector(".rect_div");
const elemP = document.querySelector(".rect_p");
const elemSpan = document.querySelector(".rect_span");

const removeBtn = document.querySelector(".remove-handlers-btn");
const clearBtn = document.querySelector(".clear-btn");
// Clear ------
const clearList = () => {
  const eventListItem = document.querySelector(".events-list");
  while (eventListItem.firstChild) {
    eventListItem.removeChild(eventListItem.firstChild);
  }
};
const removeAllList = clearList.bind(null);
clearBtn.addEventListener("click", removeAllList);
// Clear ------

const logTarget = (text, color) => {
  const eventListItem = document.querySelector(".events-list");
  eventListItem.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};

// ======================

const logGreyDiv = logTarget.bind(null, "DIV", "grey");
const logGreyP = logTarget.bind(null, "P", "grey");
const logGreySpan = logTarget.bind(null, "SPAN", "grey");

const logGreenDiv = logTarget.bind(null, "DIV", "green");
const logGreenP = logTarget.bind(null, "P", "green");
const logGreenSpan = logTarget.bind(null, "SPAN", "green");

elemDiv.addEventListener("click", logGreyDiv);
elemSpan.addEventListener("click", logGreySpan);
elemP.addEventListener("click", logGreyP);

elemDiv.addEventListener("click", logGreenDiv, true);
elemSpan.addEventListener("click", logGreenSpan, true);
elemP.addEventListener("click", logGreenP, true);
