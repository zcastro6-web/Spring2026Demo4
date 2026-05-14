const hamburger = document.getElementById("hamburger");
const drawer = document.getElementById("drawer");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  const isOpen = drawer.classList.toggle("open");
  hamburger.classList.toggle("open", isOpen);
  overlay.classList.toggle("open", isOpen);
});

overlay.addEventListener("click", () => {
  drawer.classList.remove("open");
  hamburger.classList.remove("open");
  overlay.classList.remove("open");
});