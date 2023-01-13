const searchIcon = document.querySelector(".trigger_clip");
const searchParent = document.querySelector(".search");
const cancelSearch = document.querySelector(".back_to_page");

searchIcon.addEventListener("click", () => {
  searchParent.classList.add("active");
  cancelSearch.addEventListener("click", () => {
    searchParent.classList.remove("active");
  });
});
