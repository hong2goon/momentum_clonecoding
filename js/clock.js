const clockContainer = document.querySelector('.js-clock'),
  clockTime = clockContainer.querySelector('.time'),
  clockFormat = clockContainer.querySelector('.format');

function getTime() {
  const date = new Date(),
    hours = date.getHours(),
    hours12 = hours % 12 || 12,
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    amOrPm = date.toLocaleTimeString('en-US').split(' ')[1];
  
  if (clockContainer.classList.contains('hour12')) {
    clockFormat.classList.add('show-inline');
    clockFormat.innerText = amOrPm;
    clockTime.innerHTML = `<span class="hours">${hours12 < 10 ? `0${hours12}` : hours12}</span>:<span class="minutes">${minutes < 10 ? `0${minutes}` : minutes}</span><span class="seconds">:${seconds < 10 ? `0${seconds}` : seconds}</span>`;
  } else {
    clockFormat.classList.remove('show-inline');
    clockTime.innerHTML = `<span class="hours">${hours < 10 ? `0${hours}` : hours}</span>:<span class="minutes">${minutes < 10 ? `0${minutes}` : minutes}</span><span class="seconds">:${seconds < 10 ? `0${seconds}` : seconds}</span>`;
  }
}

function clockInit() {
  localStorage.getItem("hour12") == "true" ? clockContainer.classList.add('hour12') : clockContainer.classList.remove('hour12');
  getTime();
  setInterval(getTime, 1000);
}
clockInit();