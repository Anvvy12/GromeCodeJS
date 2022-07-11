function setButton(buttonText) {
  const dockBody = document.querySelector("body");
  dockBody.innerHTML = "<button>" + buttonText + " </button>";

  //   const dockBodyV2 = document.querySelector("body");
  //   dockBody.textContent = `<button> ${buttonText} </button>`;
}
// Test data
// setButton("button text");
