export function initHistory(state) {
  window.history.replaceState(state, null, "");
}

export function initBackNav(onBackPressed) {
  window.addEventListener("popstate", (event) => {
    onBackPressed(event.state);
  });
}
