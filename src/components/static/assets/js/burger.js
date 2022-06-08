let hamburger = document.querySelector(".hamburger");
let hamburgerMenu = document.querySelector(".aside");
let overlay = document.querySelector(".lay");

hamburger.addEventListener("click", () => {
  hamburgerMenu.classList.add("actie");
  overlay.style.display = "block";
  overlay.addEventListener("click", () => {
    hamburgerMenu.classList.remove("actie");
    overlay.style.display = "none";
  });
});
