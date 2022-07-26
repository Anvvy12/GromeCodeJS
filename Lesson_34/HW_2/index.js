const url = "https://62e0189198dd9c9df60da24a.mockapi.io";

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

const postUserDate = () => {
  const formData = [Object.fromEntries(new FormData(loginFormElem))].reduce(
    (acc, [input, value]) => Object.assign(acc, { [input]: value }),
    {}
  );
  console.log(formData);

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((response) => {
      inputsArr.map((ele) => (ele.value = ""));
      submitBtn.disabled = true;
      alert(JSON.stringify(response));
    });
};

submitBtn.addEventListener("submit", postUserDate);
