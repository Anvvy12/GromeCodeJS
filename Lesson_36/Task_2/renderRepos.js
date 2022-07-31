const listElem = document.querySelector(".repo-list");

export function clearList() {
  listElem.innerHTML = "";
}

export const renderRepos = (reposList) => {
  const reposeListElem = reposList.map(({ name }) => {
    const listElem = document.createElement("li");
    listElem.classList.add("repo-list__item");
    listElem.textContent = name;
    return listElem;
  });
  clearList();
  listElem.append(...reposeListElem);
};
