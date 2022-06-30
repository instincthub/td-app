export const autocomplete = (inp, arr) => {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function (e) {
    var a,
      b,
      i,
      val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() === val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode === 40) {
      /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode === 38) {
      //up
      /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode === 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt !== x[i] && elmnt !== inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
};

/*An array containing all the country names in the world:*/
let universities = [
  "Abia State University",
  "Abubakar Tafawa Balewa University",
  "Achievers University, Owo",
  "Adamawa State University",
  "Adekunle Ajasin University",
  "Adeleke University",
  "Admiralty University of Nigeria",
  "Afe Babalola University",
  "African University of Science and Technology",
  "Ahmadu Bello University",
  "Ajayi Crowther University",
  "Akwa Ibom State University",
  "Alex Ekwueme Federal University, Ndufu-Alike",
  "Al-Hikmah University",
  "Al-Qalam University, Katsina",
  "Ambrose Alli University",
  "American University of Nigeria",
  "Anchor University, Lagos",
  "Arthur Jarvis University",
  "Atiba University",
  "Augustine University",
  "Babcock University",
  "Bauchi State University",
  "Bayero University Kano",
  "Baze University",
  "Bells University of Technology",
  "Benson Idahosa University",
  "Benue State University",
  "Bingham University",
  "Borno State University",
  "Bowen University",
  "Caleb University",
  "Caritas University",
  "Chrisland University",
  "Christopher University",
  "Chukwuemeka Odumegwu Ojukwu University",
  "Clifford University",
  "Coal City University",
  "Covenant University",
  "Crawford University",
  "Crown Hill University",
  "Delta State University, Abraka",
  "Dominican University, Ibadan",
  "Eastern Palm University",
  "Ebonyi State University",
  "Edo University",
  "Edwin Clark University",
  "Ekiti State University, Ado Ekiti",
  "Eko University of Medical and Health Sciences",
  "Elizade University",
  "Enugu State University of Science and Technology",
  "Evangel University, Akaeze",
  "Federal University of Agriculture, Abeokuta",
  "Federal University of Petroleum Resources",
  "Federal University of Technology, Akure",
  "Federal University of Technology, Minna",
  "Federal University of Technology, Owerri",
  "Federal University, Birnin Kebbi",
  "Federal University, Dutse",
  "Federal University, Dutsin-Ma",
  "Federal University, Gashua",
  "Federal University, Gusau",
  "Federal University, Kashere",
  "Federal University, Lafia",
  "Federal University, Lokoja",
  "Federal University, Otuoke",
  "Federal University, Oye-Ekiti",
  "Federal University, Wukari",
  "Fountain University, Osogbo",
  "Glorious Vision University",
  "Godfrey Okoye University",
  "Gombe State University",
  "Gombe State University of Science and Technology",
  "Gregory University, Uturu",
  "Hallmark University, Ijebu-Itele",
  "Hezekiah University",
  "Ibrahim Badamasi Babangida University",
  "Igbinedion University Okada",
  "Ignatius Ajuru University of Education",
  "Imo State University",
  "Joseph Ayo Babalola University",
  "Kaduna State University",
  "Kano University of Science and Technology",
  "Kebbi State University of Science and Technology",
  "Kings University",
  "Kola Daisi University",
  "Kwara State University",
  "Kwararafa University, Wukari",
  "Ladoke Akintola University of Technology",
  "Lagos State University",
  "Landmark University",
  "Lead City University",
  "Legacy University, Okija",
  "Madonna University, Nigeria",
  "Mcpherson University",
  "Michael and Cecilia Ibru University",
  "Michael Okpara University of Agriculture",
  "Modibbo Adama University of Technology",
  "Moshood Abiola University of Science and Technology, Abeokuta",
  "Mountain Top University",
  "Nasarawa State University",
  "Niger Delta University",
  "Nigerian Maritime University, Okerenkoko",
  "Nile University of Nigeria",
  "Nnamdi Azikiwe University",
  "Novena University",
  "Obafemi Awolowo University",
  "Obong University",
  "Oduduwa University",
  "Olabisi Onabanjo University",
  "Ondo State University of Science and Technology",
  "Osun State University",
  "PAMO University of Medical Sciences",
  "Pan-Atlantic University",
  "Paul University",
  "Plateau State University",
  "Precious Cornerstone University",
  "Redeemer's University",
  "Renaissance University",
  "Rhema University",
  "Ritman University",
  "Rivers State University",
  "Salem University",
  "Skyline University Nigeria",
  "Sokoto State University",
  "Southwestern University, Nigeria",
  "Spiritan University, Nneochi",
  "Sule Lamido University",
  "Summit University Offa",
  "Taraba State University",
  "The Technical University",
  "Umaru Musa Yar'Adua University",
  "University of Abuja",
  "University of Africa",
  "University of Agriculture, Makurdi",
  "University of Benin",
  "University of Calabar",
  "University of Ibadan",
  "University of Ilorin",
  "University of Jos",
  "University of Lagos",
  "University of Maiduguri",
  "University of Medical Sciences",
  "University of Mkar",
  "University of Nigeria",
  "University of Port Harcourt",
  "University of Uyo",
  "Usmanu Danfodio University",
  "Veritas University",
  "Wellspring University",
  "Wesley University of Science and Technology",
  "Western Delta University",
  "Yobe State University",
  "Yusuf Maitama Sule University Kano",
  "Zamfara State University",
];

// console.log(universities.length);
autocomplete(document.getElementById("myInput"), universities);
