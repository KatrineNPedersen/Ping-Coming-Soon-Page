"use strict";
const input = document.querySelector("input");
const error = document.querySelector(".error");

function notifyMe() {
  checkValidity();
  tryAgain();
}
notifyMe();

function checkValidity() {
  input.addEventListener("invalid", function (e) {
    e.preventDefault();
    if (input.validity.valueMissing) {
      error.innerHTML =
        "<em>Whoops! It looks like you forgot to add your email</em>";
    } else {
      error.innerHTML = "<em>Please provide a valid email address</em>";
    }
    error.classList.remove("hidden");
    input.style.border = "1px solid hsl(354, 100%, 66%)";
  });
}

function tryAgain() {
  input.addEventListener("input", function () {
    error.classList.add("hidden");
    input.style.border = "1px solid hsl(223, 100%, 88%)";
  });
}
