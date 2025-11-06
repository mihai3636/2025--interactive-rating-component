import { initBackNav } from "./backManager.js";

console.log("Hello world");

const btnSubmitEl = document.getElementById("btnSubmit");
const formEl = document.getElementById("formRating");
const sectionThanksEl = document.querySelector(".card--thanks");

initBackNav(handleBackPressed);

btnSubmitEl.addEventListener("click", (ev) => {
  ev.preventDefault();
  history.pushState({ test: 123 }, "", "");
  showThanks();

  console.log("Clicked");
});

function initHomePage() {
  formEl.classList.remove("hidden-left");
  formEl.setAttribute("aria-hidden", "false");

  sectionThanksEl.classList.add("hidden-right");
  sectionThanksEl.setAttribute("aria-hidden", "true");
}

function handleBackPressed() {
  initHomePage();
}

function showThanks() {
  formEl.classList.add("hidden-left");
  formEl.setAttribute("aria-hidden", "true");

  sectionThanksEl.classList.remove("hidden-right");
  sectionThanksEl.setAttribute("aria-hidden", "false");
}
