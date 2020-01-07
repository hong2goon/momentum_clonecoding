const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser",
    HIDE_CN = "hide";


function saveName(name) {
    localStorage.setItem(USER_LS, name);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.remove(HIDE_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(name) {
    form.classList.add(HIDE_CN);
    greeting.classList.remove(HIDE_CN);
    const clock = document.querySelector(".js-clock"),
        hours12 = clock.classList.contains('hour12'),
        hours = clock.querySelector(".hours").textContent,
        format = clock.querySelector('.format').textContent;
    let greet;
    if(hours12) {
        format === "AM" ? 
            (hours >= 5 ? greet = "Good Morning" : greet = "Good Evening")
        : (hours == 12 || hours < 5 ? greet = "Good Afternoon" : greet = "Good Evening");
    } else {
        if (hours >= 5 && hours < 12) {
            greet = "Good Morning";
        } else if (hours >= 12 && hours < 17) {
            greet = "Good Afternoon";
        } else if (hours > 17 && hours < 5) {
            greet = "Good Evening";
        }
    }
    greeting.innerHTML = `<span class="greeting">${greet}</span>, <span class="userName">${name}</span>.`;
    
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function greetInit() {
    loadName();
}
greetInit();