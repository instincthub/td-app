export function clickRadio(elmnt) {
    let n, i, x;
    n = elmnt.id;
    for (i = 1; i < 5; i++) {
      x = document.getElementById("label" + i);
      if (x) {x.className = x.className.replace(" checkedlabel", "");}
    }
    document.getElementById("label" + n).className += " checkedlabel";
}

export function clickNextButton(n) {
    submitAnswer(n + 1);
}

export function submitAnswer(n) {
let f = document.getElementById("quizform");
f["nextnumber"].value = n;
f.submit();
}

export function startTimer() {
let tobj = document.getElementById("timespent")
let t = "0:00";
let s = Number("00");
let d = new Date();
let timeint = setInterval(function () {
    s += 1;
    d.setMinutes("0");
    d.setSeconds(s);
    let min = d.getMinutes();
    let sec = d.getSeconds();
    if (sec < 10) sec = "0" + sec;
    document.getElementById("timespent").value = min + ":" + sec;
}, 1000);
tobj.value = t;
}
//   if (window.addEventListener) {              
//     window.addEventListener("load", startTimer);
//   } else if (window.attachEvent) {                 
//     window.attachEvent("onload", startTimer);
//   }