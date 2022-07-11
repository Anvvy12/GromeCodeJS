export function finishForm() {
  const loginForm = document.querySelector(".login-form");
  const startInput = document.createElement("input");

  startInput.setAttribute("type", "text");
  startInput.setAttribute("name", "login");
  loginForm.prepend(startInput);

  const passwordForm = document.querySelector("input[name='password']");
  passwordForm.setAttribute("type", "password");
}

// test data
// finishForm();
