const heroContainer = document.querySelector(".hero-container");
const openMenu = document.querySelector(".hamburger-menu-icon");
const closeMenu = document.querySelector(".close-menu");

openMenu.addEventListener("click", () => {
  heroContainer.classList.toggle("active");
});

closeMenu.addEventListener("click", () => {
  heroContainer.classList.toggle("active");
});
