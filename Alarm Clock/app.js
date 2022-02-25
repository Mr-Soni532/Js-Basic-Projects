let time = document.getElementById("time");
let input = document.getElementById("input");
setInterval(Clock, 1000);
function Clock() {
  let d = new Date();
  // console.log(d.toLocaleTimeString())
  console.log(d)

  time.textContent = d.toLocaleTimeString();
  if (input.value == d.toLocaleTimeString()) {
    var audio = new Audio("alarm.mp3");
    audio.play();
  }
}
