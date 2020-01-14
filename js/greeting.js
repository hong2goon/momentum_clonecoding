const greetWrap = document.querySelector(".greeting-wrap"),
    greetForm = greetWrap.querySelector(".js-form"),
    input = greetForm.querySelector("input"),
    greeting = document.querySelector(".js-greeting"),
    btnEdit = document.querySelector(".btn-edit");

const USER_LS = "currentUser",
    HIDE_CN = "hide";

function reloadName() {
    greeting.classList.add(HIDE_CN);
    askForName();
}

function handleEdit(event) {
    event.preventDefault();
    reloadName();
    input.value = localStorage.getItem(USER_LS);
    input.focus();
}

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
    greetForm.classList.remove(HIDE_CN);
    greetForm.addEventListener("submit", handleSubmit);
}

function paintGreeting(name) {
    greetForm.classList.add(HIDE_CN);
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
        } else {
            greet = "Good Evening";
        }
    }
    
    const strByteLength = function(s,b,i,c) {
        for(b=i=0; c=s.charCodeAt(i++); b+=c>>11 ? 3:c>>7 ? 2:1);
        return b;
    };
    if (strByteLength(name) > 15) {
        greeting.innerHTML = `<span class="greeting">${greet}</span>, <span class="userName fs-24">${name}. <button class="btn-edit" onClick="handleEdit(event);">edit</button></span>`;
    } else {
        greeting.innerHTML = `<span class="greeting">${greet}</span>, <span class="userName">${name}. <button class="btn-edit" onClick="handleEdit(event);">edit</button></span>`;
    }
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null || currentUser === "null") {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function greetInit() {
    localStorage.getItem(VIEW_GREET_LS) == "true" ? greetWrap.classList.remove('hide') : greetWrap.classList.add('hide');
    if(localStorage.getItem("currentUser") == null) {
        localStorage.setItem("currentUser", "null");
    }
    loadName();
}
greetInit();