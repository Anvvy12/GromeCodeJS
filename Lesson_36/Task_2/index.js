import { fetchUserData, fetchRepositories } from "./gateways.js";
import { renderUserData } from "./user.js";
import { renderRepos, clearList } from "./renderRepos.js";
import { showSpinner, hideSpinner } from "./spinner.js";

const dafaultUser = {
  avatar_url: "https://avatars3.githubusercontent.com/u10001",
  name: "",
  location: "",
};

renderUserData(dafaultUser);

const showUserBtnElem = document.querySelector(".name-form__btn");
const userNameInputElem = document.querySelector(".name-form__input");

const onSearchUser = async () => {
  showSpinner();
  clearList();
  const userName = userNameInputElem.value;
  try {
    const userData = await fetchUserData(userName);
    renderUserData(userData);
    const reposList = await fetchRepositories(userData.repos_url);
    renderRepos(reposList);
  } catch (error) {
    alert(error.message);
  } finally {
    hideSpinner();
  }

  // fetchUserData(userName)
  // .then((userData) => {
  //   renderUserData(userData);
  //   return userData.repos_url;
  // })
  // .then((url) => fetchRepositories(url))
  // .then((reposList) => {
  //   renderRepos(reposList);
  // })
  // .catch((err) => alert(err.message))
  // .finally(() => {
  // hideSpinner();
  // });
};
showUserBtnElem.addEventListener("click", onSearchUser);
