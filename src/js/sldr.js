const slider = document.querySelector(".slider-container");

let mySwiper;

function mobileSlider() {
  if (window.innerWidth <= 600 && slider.dataset.mobile == "false") {
    mySwiper = new Swiper(slider, {
      sliderPerView: 1,
      spaceBetween: 10,
      loop: true,
      slideClass: "swiper-wrapper__card",
      pagination: {
        el: ".swiper-pagination",
      },
    });

    slider.dataset.mobile = "true";
  }
  if (window.innerWidth > 600) {
    slider.dataset.mobile = "false";
    // проверяем есть ли класс у слайдера, если есть ломаем
    if (slider.classList.contains("swiper-initialized")) {
      mySwiper.destroy();
    }
  }
}
mobileSlider();
window.addEventListener("resize", mobileSlider);
