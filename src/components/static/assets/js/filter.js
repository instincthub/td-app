function tableAttendee() {
  var userSearch, loopThrough, allList, trackValue;
  userSearch = document.getElementById("tableEvents");
  loopThrough = userSearch.value.toUpperCase();
  allList = document.getElementsByClassName("track_data");

  for (i = 0; i < allList.length; i++) {
    trackValue = allList[i].textContent || allList[i].innerText;
    if (trackValue.toUpperCase().indexOf(loopThrough) > -1) {
      allList[i].style.display = "";
    } else {
      allList[i].style.display = "none";
    }
  }
}
