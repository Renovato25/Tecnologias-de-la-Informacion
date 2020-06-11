const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
  document.getElementsByTagName("html")[0].style.overflow = "hidden";
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
  document.getElementsByTagName("html")[0].style.overflow = "auto";
});
