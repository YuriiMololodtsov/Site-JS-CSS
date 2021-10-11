let page = document.querySelector(".slider-container");
let themeButton = document.querySelector(".read-more__btn");

themeButton.onclick = function () {
  page.classList.toggle("active");
};
