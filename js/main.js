import { initBackNav, initHistory } from "./backManager.js";
import { hideThanks, showThanks } from "./thanks.js";
import { showHome, hideHome, initBtnSubmit } from "./home.js";

let uiState = { submitted: false };

initHistory(uiState);
initBackNav(handleBackPressed);
initBtnSubmit(handleBtnSubmit);

function render(state) {
  if (state.submitted) {
    showThanks();
    hideHome();

    return;
  }

  showHome();
  hideThanks();
}

function handleBtnSubmit() {
  uiState = { submitted: true };
  history.pushState(uiState, null, "");

  render(uiState);
}

function handleBackPressed(state) {
  render(state);
}
