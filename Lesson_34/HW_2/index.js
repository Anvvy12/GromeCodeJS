const URL = "https://62e0189198dd9c9df60da24a.mockapi.io";

const loginFormElem = document.querySelector(".login-form");
const submitBtn = document.querySelector(".submit-button");
const inputsArr = document.querySelectorAll(".form-input");

const validate = () => {
  if (loginFormElem.reportValidity()) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
};

loginFormElem.addEventListener("input", validate);
const getUsersDate = () => {
  fetch(URL).then((elem) => alert(elem));
};
const postUserDate = () => {
  const formData = [Object.fromEntries(new FormData(loginFormElem))].reduce(
    (acc, [input, value]) => ({ ...acc, [input]: value }),
    {}
  );
  console.log(formData);

  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(formData),
  }).then((elem) => alert(elem));
};

submitBtn.addEventListener("submit", postUserDate);
