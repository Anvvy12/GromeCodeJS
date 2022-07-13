const arrBtn = Array.from(document.querySelectorAll(".pagination__page"));
const [firstBtn, secondBtn, thirdBtn] = arrBtn;

function showText(event) {
  console.log(event.target.getAttribute("data-page-number"));
}

const letMeSee = showText.bind(null);

firstBtn.addEventListener("click", letMeSee);
secondBtn.addEventListener("click", letMeSee);
thirdBtn.addEventListener("click", letMeSee);
