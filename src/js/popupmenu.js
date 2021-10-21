// let popup = document.getElementById('mypopup'),
//   popupMyBtn = document.getElementById('myBtn'),
//   popupClose = document.querySelector('.close');

let popupsToggle = document.querySelectorAll(".open-popup"),
  popupClose = document.querySelectorAll(".close");

popupsToggle.forEach(function (item) {
  item.addEventListener("click", function () {
    let popupName = item.getAttribute("data-popup");
    document.getElementById(popupName).style.display = "block";
    console.log(popupName);
  });
});

popupClose.forEach(function (item) {
  item.addEventListener("click", function () {
    let popup = item.closest(".popup");
    popup.style.display = "none";
  });
});

window.onclick = function (e) {
  if (e.target.classList.contains("popup")) {
    e.target.style.display = "none";
  }
};
