export function createButton(text) {
  const bodyElem = document.querySelector("body");
  const button = document.createElement("button");
  button.textContent = text;

  bodyElem.append(button);
}
// test data
// createButton("button text");
