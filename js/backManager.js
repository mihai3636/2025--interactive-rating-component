export function initHistory(state) {
  window.history.replaceState(state, null, "");
}

export function initBackNav(onBackPressed) {
  window.addEventListener("popstate", (event) => {
    console.log("User pressed back");
    console.log(event.state);
    onBackPressed(event.state);
  });
}
