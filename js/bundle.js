var wheel = document.getElementById("wheel");
var wheelBtn = document.getElementById("button");
var closePopup = document.getElementById("closePopup");
var firstWrapper = document.getElementById("firstWrapper");
var secondWrapper = document.getElementById("secondWrapper");
var buttonText = document.getElementById("buttonText");
var getPrizes = document.getElementById("getPrizes");
var redirectLink = document.getElementById("redirectLink");

var counter = 0;

function animation() {
  if (counter < 1) {
    wheel.classList.toggle("step-1");
    wheelBtn.classList.toggle("animation-in-process");
    counter++;
  } else {
    wheel.classList.toggle("step-2");
    wheelBtn.classList.toggle("animation-in-process");
    counter++;
  }
  function modalPopup() {
    modal.classList.add("modal-active");
    modal2.classList.toggle("modal-active");
    wheelBtn.classList.toggle("animation-in-process");
    modalStarsLeft.style.display = "block"
    modalStarsRight.style.display = "block"
    if (counter > 1) {
      modal3.classList.add("modal-active")
      wheelBtn.classList.toggle("animation-in-process");
      setTimeout(() => form.classList.add("form-active"), 1000);
      setTimeout(() => overlay.classList.add("overlay-active"), 1000)
    }
  }
  setTimeout(modalPopup, 5500);
}