export function getTitle() {
  const title = document.querySelector(".title");
  const returnedTitleText = title.textContent;
  return returnedTitleText;
}

export function getDescription() {
  const description = document.querySelector(".about");
  const returnedDescriptionText = description.innerText;
  return returnedDescriptionText;
}

export function getPlans() {
  const plans = document.querySelector(".plans");
  const returnedPlansText = plans.innerHTML;
  return returnedPlansText;
}
export function getGoal() {
  const goal = document.querySelector(".goal");
  const returnedGoalText = goal.outerHTML;
  return returnedGoalText;
}
console.log(getTitle());
console.log(getDescription());
console.log(getPlans());
console.log(getGoal());
