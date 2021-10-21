const slider = document.querySelector(".slider-container");

const slider2 = document.querySelector(".slider-container2");

const slider3 = document.querySelector(".slider-container3");

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

let mySwiper2;

function mobileSlider2() {
  if (window.innerWidth <= 600 && slider2.dataset.mobile == "false") {
    mySwiper2 = new Swiper(slider2, {
      sliderPerView: 1,
      spaceBetween: 10,
      loop: true,
      wrapperClass: "swiper-wrapper2",
      slideClass: "swiper-wrapper__card2",

      pagination: {
        el: ".swiper-pagination",
      },
    });

    slider2.dataset.mobile = "true";
  }
  if (window.innerWidth > 600) {
    slider2.dataset.mobile = "false";
    // проверяем есть ли класс у слайдера, если есть ломаем
    if (slider2.classList.contains("swiper-initialized")) {
      mySwiper2.destroy();
    }
  }
}
mobileSlider2();
window.addEventListener("resize", mobileSlider2);

let mySwiper3;

function mobileSlider3() {
  if (window.innerWidth <= 600 && slider3.dataset.mobile == "false") {
    mySwiper3 = new Swiper(slider3, {
      sliderPerView: 1,
      spaceBetween: 50,
      loop: true,
      wrapperClass: "swiper-wrapper3",
      slideClass: "swiper-wrapper__card3",
      pagination: {
        el: ".swiper-pagination",
      },
    });

    slider3.dataset.mobile = "true";
  }
  if (window.innerWidth > 600) {
    slider3.dataset.mobile = "false";
    // проверяем есть ли класс у слайдера, если есть ломаем
    if (slider3.classList.contains("swiper-initialized")) {
      mySwiper3.destroy();
    }
  }
}
mobileSlider3();
window.addEventListener("resize", mobileSlider3);
