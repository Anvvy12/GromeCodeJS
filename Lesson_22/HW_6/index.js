const arrBtn = Array.from(document.querySelectorAll(".btn"));
const [btnJs, btnHtml] = arrBtn;

function showText(event) {
  console.log(event.target.textContent);
}

const letMeSee = showText.bind(null);

btnJs.addEventListener("click", letMeSee);
btnHtml.addEventListener("click", letMeSee);
