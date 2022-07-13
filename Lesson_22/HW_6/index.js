const arrBtn = Array.from(document.querySelectorAll(".btn"));

function handleClick(btnArray) {}
const [btnJs, btnHtml] = arrBtn;
btnJs.addEventListener("click", () => console.log(btnJs.textContent));
btnHtml.addEventListener("click", () => console.log(btnHtml.textContent));
