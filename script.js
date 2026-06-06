const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#main-nav");
const searchDialog = document.querySelector("[data-search-dialog]");
const searchButton = document.querySelector("[data-open-search]");
const themeButton = document.querySelector("[data-theme]");
navToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

searchButton?.addEventListener("click", () => {
  if (typeof searchDialog.showModal === "function") {
    searchDialog.showModal();
  }
});

themeButton?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeButton.textContent = document.body.classList.contains("dark") ? "Light" : "Theme";
});
