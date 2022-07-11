export function getTitleElement() {
  const res = document.querySelector(".title");
  console.dir(res);
  return res;
}
export function getInputElement() {
  const res = document.querySelector("input", "text");
  console.dir(res);
  return res;
}

getTitleElement();
getInputElement();
