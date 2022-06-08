function readFile() {
  var reader = new FileReader();
  var file = document.querySelector("#img_changer").files[0];

  reader.onload = function (e) {
    document.querySelector("#result").src = e.target.result;
  };
  reader.readAsDataURL(file);

  if (files[0].size > 2097152) {
    alert("File is too big!");

    this.value = "";
  }
}

// =============Add this two events on your INPUT file to upload image

// id="img_changer"
// onchange="readFile();"

// Your image tag must have the id of #result
