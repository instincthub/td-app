
export const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navlinks");
  // const miniMenu = document.querySelector(".mini_menu");
  const navLinks = document.querySelectorAll(".navlinks li");

  // miniMenu.classList.toggle("active");
  nav.classList.toggle("active");

    //Animation Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 9 + 0.2
        }s`;
      }
    });

    //bURGER aNIMATION
    burger.classList.toggle("toggle");
};

export const showVideo = () => {
  document.querySelector(".play_video").style.display = "block";
};
export const removeVideo = () => {
  document.querySelector(".play_video").style.display = "none";
};
