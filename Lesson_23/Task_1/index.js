// так можно получить данные формы - ВАРИАНТ 1:
// eslint-disable-next-line no-undef
// const formFields = [...new FormData(formElem)];
// // formFields => [["email", "значение поля email"], ["password", "значение поля password"]]

// const formData = formFields.reduce(function (acc, formField) {
//   const prop = formField[0]; // здесь "name" инпута
//   const value = formField[1]; // здесь "value" инпута
//   // если использовать деструктуризацию, то можно предыдущие 2 строки записать короче
//   // const [prop, value] = formField;
//   return {
//     // используем оператор расширения, чтобы в acc добвить свойства все предыдущих итераций
//     ...acc,
//     // используем вычислимое свойство объекта, чтобы добавить в аккумулятор новое свойство
//     [prop]: value,
//   };
// }, {});

// более простой формат считывания формы - ВАРИАНТ 2:
// const formData = Object.fromEntries(new FormData(formElem));

const emailInputElem = document.querySelector("#email");
const passwordInputElem = document.querySelector("#password");

const emailErrorElem = document.querySelector(".error-text_email");
const passwordErrorElem = document.querySelector(".error-text_password");

const isRequired = (value) => (value ? undefined : "Required");
const isEmail = (value) =>
  value.includes("@") ? undefined : "Should be an email";

// const onEmail

const onEmailChange = (value) => {
  const errorText = [isRequired, isEmail]
    .map((validator) => validator(value.target.value))
    .filter((errorText) => errorText)
    .join(", ");

  emailErrorElem.textContent = errorText;
};

const onPasswordChange = (value) => {
  const errorText = [isRequired]
    .map((validator) => validator(value.target.value))
    .filter((errorText) => errorText)
    .join(", ");

  passwordErrorElem.textContent = errorText;
};

emailInputElem.addEventListener("input", onEmailChange);
passwordInputElem.addEventListener("input", onPasswordChange);
