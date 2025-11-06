import { initBackNav } from "./backManager.js";

console.log("Hello world");

const btnSubmitEl = document.getElementById("btnSubmit");
const formEl = document.getElementById("formRating");
const sectionThanksEl = document.querySelector(".card--thanks");
const radioEls = document.querySelectorAll("input[type='radio']");
const selectionEl = document.querySelector(".selection-text > span");

console.log(selectionEl);

let uiState = { submitted: false };

initBackNav(handleBackPressed);

function render(state) {
  if (state.submitted) {
    showThanks();
    return;
  }

  showHome();
}

btnSubmitEl.addEventListener("click", (ev) => {
  ev.preventDefault();
  if (!validateInput()) return;

  history.pushState({ test: 123 }, "", "");
  showThanks();

  console.log("Clicked");
  console.log(getSelectedRating());
});

function showHome() {
  formEl.classList.remove("hidden-left");
  formEl.setAttribute("aria-hidden", "false");

  sectionThanksEl.classList.add("hidden-right");
  sectionThanksEl.setAttribute("aria-hidden", "true");
}

function handleBackPressed() {
  showHome();
}

function showThanks() {
  formEl.classList.add("hidden-left");
  formEl.setAttribute("aria-hidden", "true");

  sectionThanksEl.classList.remove("hidden-right");
  sectionThanksEl.setAttribute("aria-hidden", "false");

  let selectedRating = getSelectedRating();
  selectionEl.textContent = selectedRating;
}

function validateInput() {
  return Array.from(radioEls).some((radio) => radio.checked);
}

function getSelectedRating() {
  let radio = Array.from(radioEls).find((radio) => radio.checked);
  if (!radio) return "0";

  let idItems = radio.id.split("-");
  if (idItems.length < 2) {
    console.log("Something wrong with the radio id");
    return "0";
  }

  return idItems[1];
}
