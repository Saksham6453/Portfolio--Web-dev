const ham = document.getElementById("hamburger");
const nav = document.getElementById("navi");

ham.addEventListener("click", () => {
  nav.classList.toggle("navOpen");
});
