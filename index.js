const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const body = document.querySelector("body");

navToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  navMenu.classList.toggle("nav-menu-visible");

  if (navMenu.classList.contains("nav-menu-visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});

body.addEventListener("click", () => {
  navMenu.classList.remove("nav-menu-visible");
});