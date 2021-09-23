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
    // firstWrapper.style.display = "none";
    // secondWrapper.style.display = "block";
    // getPrizes.style.display = "none";
    // redirectLink.style.display = "flex";
    wheel.classList.toggle("step-2");
    wheelBtn.classList.toggle("animation-in-process");
    // closePopup.style.display = "none";
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
    // overlay.classList.toggle("overlay-active");
  }
  setTimeout(modalPopup, 5500);
}

function closeModal() {
  // modal.classList.toggle("modal-active");
  // overlay.classList.toggle("overlay-active");
  // wheelBtn.classList.toggle("animation-in-process");
}