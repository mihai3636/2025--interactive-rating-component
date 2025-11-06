const sectionThanksEl = document.querySelector(".card--thanks");
const selectionEl = document.querySelector(".selection-text > span");
const radioEls = document.querySelectorAll("input[type='radio']");

export function hideThanks() {
  sectionThanksEl.classList.add("hidden-right");
  sectionThanksEl.setAttribute("aria-hidden", "true");
}

export function showThanks() {
  sectionThanksEl.classList.remove("hidden-right");
  sectionThanksEl.setAttribute("aria-hidden", "false");

  let selectedRating = getSelectedRating();
  selectionEl.textContent = selectedRating;
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
