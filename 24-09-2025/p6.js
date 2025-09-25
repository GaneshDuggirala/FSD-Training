// Create a digital clock that prints current time every second.

var hour = 0,
  sec = 0,
  min = 0;

function times() {
  sec += 1;
  if (sec == 60) {
    sec = 0;
    min += 1;
  }

  if (min == 60) {
    min = 0;
    sec = 0;
    hour += 1;
  }
  if (hour == 25 && min == 0 && sec == 0) {
    hour = 0;
  }
  console.log(`${hour.toString().padStart(2,'0')} : ${min.toString().padStart(2,'0')} : ${sec.toString().padStart(2,'0')}`)
}


setInterval(times,1000)