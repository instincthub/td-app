export const hamBurger = () => {
  const dropDown = document.querySelector(".dropdown");
  const miniMenu = document.querySelector(".mini_menu");

  dropDown.addEventListener("click", () => {
    miniMenu.classList.toggle("active");
  });
  // dropDown.addEventListener("onmouseenter", () => {
  //   miniMenu.classList.add("active");
  //   alert("hey");
  //   dropDown.addEventListener("onmouseleave", () => {
  //     miniMenu.classList.remove("active");
  //   });
  // });
  // miniMenu.addEventListener("mouseover", () => {
  //   miniMenu.classList.add("active");
  //   miniMenu.addEventListener("mouseout", () => {
  //     miniMenu.classList.remove("active");
  //   });
  // });

  // function showDrop() {
  //   document.querySelector(".mini_menu").style.display = "block";
  // }
  // function removeDrop() {
  //   document.querySelector(".mini_menu").style.display = "none";
  // }
  const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navlinks");
    const navLinks = document.querySelectorAll(".navlinks li");

    //toggle nav
    burger.addEventListener("click", () => {
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
    });
  };

  navSlide();
};

export const showVideo = () => {
  document.querySelector(".play_video").style.display = "block";
};
export const removeVideo = () => {
  document.querySelector(".play_video").style.display = "none";
};
