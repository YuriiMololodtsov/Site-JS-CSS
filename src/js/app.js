let page = document.querySelector(".slider-container");
let themeButton = document.querySelector(".read-more__btn");

themeButton.onclick = function () {
  page.classList.toggle("active");
};

const contentReadMoreBtn = document.querySelector(".content__readmore-btn");
const contentText3 = document.querySelector(".content__text-3");

contentReadMoreBtn.addEventListener("click", function () {
  contentText3.classList.toggle("--active");
});
