export function squaredNumbers() {
  const listPseudoArray = document.querySelectorAll(".number");
  Array.from(listPseudoArray).map((listItem) =>
    listItem.setAttribute(
      "data-squared-number",
      listItem.dataset.number * listItem.dataset.number
    )
  );
}

// test data
// squaredNumbers();

// for One Item
//   const listItem = document.querySelector(".number");
//   listItem.setAttribute(
//     "data-squared-number",
//     listItem.dataset.number * listItem.dataset.number
//   );
//   console.log(listArray.dataset.number);
// Solution for eweryone
