let hrs = document.getElementById("hours");
let mins = document.getElementById("minutes");
let secs = document.getElementById("seconds");
let display = document.getElementById("display");
let start = document.getElementById("start");
let timer;

function displaymin() {
  display.innerHTML =
    (hours.value > 1 ? hours.value : "0" + hours.value) +
    ":" +
    (minutes.value > 9 ? minutes.value : "0" + minutes.value) +
    ":" +
    (seconds.value > 9 ? seconds.value : "0" + seconds.value);
}

function watch() {
  start.disabled = true;
  hrs.disabled = true;
  mins.disabled = true;
  secs.disabled = true;
  var date1 = new Date();
  var countDownDate = new Date(); 
  countDownDate.setTime(
    date1.getTime() + hours.value * 60 * 60 * 1000 + 
      minutes.value * 60 * 1000 +
      seconds.value * 1000 +
      1 * 1000
  );

  var x = setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    display.innerHTML =
      (hours.value > 1 ? hours : "0" + hours) +
      ":" +
      (minutes > 9 ? minutes : "0" + minutes) +
      ":" +
      (seconds > 9 ? seconds : "0" + seconds);
    
    var audio = new Audio("audio.mp3");

    if (display.innerHTML == "00:00:00") {
      clearInterval(x);
      audio.play()
    }
  }, 1000);
}