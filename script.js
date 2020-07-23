const timer = document.querySelector(".timer");
const button = document.querySelector(".press");
const reset = document.querySelector(".reset");

let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;
let count = 0;
let state = false;

let interval = null;

button.addEventListener("click", () => {
  if (state) {
    state = false;
    button.innerHTML = "iniciar";
    clearInterval(interval);
  } else {
    state = true;
    button.innerHTML = "pausar";

    interval = setInterval(() => {
      days = Math.floor(count / 86400);
      hours = Math.floor((count - days * 86400) / 3600);
      minutes = Math.floor((count - hours * 3600 - days * 86400) / 60);
      seconds = Math.floor(count - hours * 3600 - days * 86400 - minutes * 60);
      count += 1;

      timer.innerHTML = `${days} d ${format(hours)}:${format(minutes)}:${format(
        seconds
      )}`;
    }, 1000);
  }
});

function format(time) {
  if (time < 10) return `0${time}`;
  else return time;
}

reset.addEventListener("click", () => {
  state = false;
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  count = 0;

  clearInterval(interval);
  timer.innerHTML = `${days} d ${format(hours)}:${format(minutes)}:${format(
    seconds
  )}`;
  button.innerHTML = "iniciar";
});
