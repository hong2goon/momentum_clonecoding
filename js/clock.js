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
  if(localStorage.getItem(HOUR12_LS) == null) {
    localStorage.setItem(HOUR12_LS, "false");
  }
  if(localStorage.getItem(SEC_LS) == null) {
      localStorage.setItem(SEC_LS, "false");
  }
  localStorage.getItem(VIEW_CLOCK_LS) == "true" ? clockContainer.classList.remove('hide') : clockContainer.classList.add('hide');
  localStorage.getItem(HOUR12_LS) == "true" ? clockContainer.classList.add('hour12') : clockContainer.classList.remove('hour12');
  localStorage.getItem(SEC_LS) == "true" ? clockSec.classList.remove('hide') : clockSec.classList.add('hide');
  getTime();
  setInterval(getTime, 1000);
}
clockInit();