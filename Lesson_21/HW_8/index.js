export function finishList() {
  const inList = document.querySelector(".list");
  const inListSpecial = document.querySelector(".special");

  const creatListItemOne = document.createElement("li");
  const creatListItemFour = document.createElement("li");
  const creatListItemSix = document.createElement("li");
  const creatListItemEight = document.createElement("li");

  creatListItemOne.textContent = "1";
  creatListItemFour.textContent = "4";
  creatListItemSix.textContent = "6";
  creatListItemEight.textContent = "8";

  inList.prepend(creatListItemOne);
  inList.append(creatListItemEight);
  inListSpecial.before(creatListItemFour);
  inListSpecial.after(creatListItemSix);
}

// test data
// finishList();
