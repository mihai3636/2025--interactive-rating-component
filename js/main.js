import { initBackNav, initHistory } from "./backManager.js";
import { hideThanks, showThanks } from "./thanks.js";

console.log("Hello world");

const btnSubmitEl = document.getElementById("btnSubmit");
const formEl = document.getElementById("formRating");
const radioEls = document.querySelectorAll("input[type='radio']");

let uiState = { submitted: false };

initHistory(uiState);
initBackNav(handleBackPressed);

btnSubmitEl.addEventListener("click", (ev) => {
  ev.preventDefault();
  if (!validateInput()) return;

  uiState = { submitted: true };
  history.pushState(uiState, null, "");

  render(uiState);
});

function render(state) {
  if (state.submitted) {
    showThanks();
    hideHome();

    return;
  }

  showHome();
  hideThanks();
}

function showHome() {
  formEl.classList.remove("hidden-left");
  formEl.setAttribute("aria-hidden", "false");
}

function handleBackPressed(state) {
  render(state);
}

function hideHome() {
  formEl.classList.add("hidden-left");
  formEl.setAttribute("aria-hidden", "true");
}

function validateInput() {
  return Array.from(radioEls).some((radio) => radio.checked);
}
