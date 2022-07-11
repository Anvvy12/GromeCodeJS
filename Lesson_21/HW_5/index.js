export function setButton(buttonText) {
  const dockBody = document.querySelector("body");
  dockBody.innerHTML = `<button> ${buttonText} </button>`;

  //   const dockBodyV2 = document.querySelector("body");
  //   dockBodyV2.textContent = `<button> ${buttonText} </button>`;
}
// Test data
// setButton("buttonText");
