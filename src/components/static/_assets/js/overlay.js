function showOverlay() {
  document.getElementById("overlay_").style.display = "flex";
  document.querySelector(".remove_class").parentElement.style.display = "none";
}
function showOverlay() {
  document.getElementById("overlay_").style.display = "block";
  document.querySelector(".remove_class").parentElement.style.display = "none";
}
function remove_class() {
  document.getElementById("overlay_").style.display = "none";
  //   document.querySelector(".remove_class").parentElement.style.display = "none";
}

function createTeam() {
  document.querySelector(".createTeam").style.display = "flex";
  document.querySelector(".remove_class").parentElement.style.display = "none";
}
function dontCreate() {
  document.querySelector(".createTeam").style.display = "none";
  //   document.querySelector(".remove_class").parentElement.style.display = "none";
}
