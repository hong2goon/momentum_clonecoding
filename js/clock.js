const clockContainer = document.querySelector('.js-clock'),
  clockFormat = clockContainer.querySelector('.format'),
  clockTime = clockContainer.querySelector('.time'),
  clockSec = clockContainer.querySelector('.seconds');

function getTime() {
  const date = new Date(),
    hours = date.getHours(),
    hours12 = hours % 12 || 12,
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    amOrPm = date.toLocaleTimeString('en-US').split(' ')[1],
    viewSec = localStorage.getItem("show seconds");
  
  if (clockContainer.classList.contains('hour12')) {
    clockFormat.classList.add('show-inline');
    clockFormat.innerText = amOrPm;
    clockTime.innerHTML = `<span class="hours">${hours12 < 10 ? `0${hours12}` : hours12}</span>:<span class="minutes">${minutes < 10 ? `0${minutes}` : minutes}</span>`;
  } else {
    clockFormat.classList.remove('show-inline');
    clockTime.innerHTML = `<span class="hours">${hours < 10 ? `0${hours}` : hours}</span>:<span class="minutes">${minutes < 10 ? `0${minutes}` : minutes}</span>`;
  }
  clockSec.innerHTML = `:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function clockInit() {
  if(localStorage.getItem("hour12") == null) {
    localStorage.setItem("hour12", "false");
  }
  if(localStorage.getItem("seconds") == null) {
      localStorage.setItem("seconds", "false");
  }
  localStorage.getItem("hour12") == "true" ? clockContainer.classList.add('hour12') : clockContainer.classList.remove('hour12');
  localStorage.getItem("seconds") == "true" ? clockSec.classList.remove('hide') : clockSec.classList.add('hide');
  getTime();
  setInterval(getTime, 1000);
}
clockInit();