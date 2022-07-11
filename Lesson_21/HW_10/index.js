export function manageClasses() {
  const oneLiItem = document.querySelector(".one");
  oneLiItem.classList.add("selected");

  const twoLiItem = document.querySelector(".two");
  twoLiItem.classList.remove("selected");

  const threeLiItem = document.querySelector(".three");
  threeLiItem.classList.toggle("three_done");

  const fourLiItem = document.querySelector(".four");
  if (fourLiItem.classList.contains("some-class")) {
    fourLiItem.classList.add("another-class");
  }
}

// test data
// manageClasses();
