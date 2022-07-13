const singleBtn = document.querySelector(".single-use-btn");

const singleUse = () => {
  console.log("clicked");
  singleBtn.removeEventListener("click", singleUse);
};

singleBtn.addEventListener("click", singleUse);
