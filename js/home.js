const formEl = document.getElementById("formRating");
const radioEls = document.querySelectorAll("input[type='radio']");
const btnSubmitEl = document.getElementById("btnSubmit");

export function showHome() {
  formEl.classList.remove("hidden-left");
  formEl.setAttribute("aria-hidden", "false");
}

export function hideHome() {
  formEl.classList.add("hidden-left");
  formEl.setAttribute("aria-hidden", "true");
}

export function initBtnSubmit(onClick) {
  btnSubmitEl.addEventListener("click", (ev) => {
    ev.preventDefault();
    if (!validateInput()) return;
    onClick();
  });
}

function validateInput() {
  return Array.from(radioEls).some((radio) => radio.checked);
}
