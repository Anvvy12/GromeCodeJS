export function getItemsList() {
  const techPseodoArray = document.querySelectorAll(".technology");
  console.dir(techPseodoArray);
  return techPseodoArray;
}

export function getItemsArray() {
  const toolPseodoArray = document.querySelectorAll(".technology");
  const elementsArray = Array.from(toolPseodoArray);
  console.dir(elementsArray);
  return elementsArray;
}

getItemsList();
getItemsArray();
