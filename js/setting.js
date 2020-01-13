const Settings = document.querySelector(".settings"),
    settingPanel = Settings.querySelector('.setting-panel'),
    btnSetting = Settings.querySelector(".btn-setting");

const navWrap = Settings.querySelector(".nav-wrap")
    navMenu = navWrap.querySelector(".nav-menu"),
    menuItems = navMenu.querySelectorAll("li"),
    links = navWrap.querySelector(".link-wrap"),
    setConts = Settings.querySelectorAll(".set-cont");

const setForm1 = document.querySelector(".js-settingForm1"),
    chkClock = setForm1.querySelector("input.chk-clock"),
    chkGreeting = setForm1.querySelector("input.chk-greeting"),
    chkWeather = setForm1.querySelector("input.chk-weather"),
    chkTodo = setForm1.querySelector("input.chk-todo");

const setForm2 = document.querySelector(".js-settingForm2"),
    chkHour12 = setForm2.querySelector("input.chk-12h"),
    chkSec = setForm2.querySelector("input.chk-sec");

const VIEW_CLOCK_LS = "view clock",
    VIEW_GREET_LS = "view greeting",
    VIEW_WEATHER_LS = "view weather",
    VIEW_TODO_LS = "view todo",
    HOUR12_LS = "hour12",
    SEC_LS = "seconds";

function selMenu() {
    for (let i=0; i<menuItems.length; i++) {
        menuItems[i].querySelector("a").addEventListener("click", function(e) {
            e.preventDefault();
            const linkAct = links.querySelector(".active");
            
            menuItems.forEach(function(e, index) {
                index === i ? e.classList.add("active") : e.classList.remove("active");
                if (linkAct !== null) {
                    linkAct.classList.remove("active");
                }
            });
            
            setConts.forEach(function(e, index) {
                index === i ? e.classList.remove("hide") :  e.classList.add("hide");
            });
        });
    }

    const linkHelp = links.querySelector("a");
    linkHelp.addEventListener("click", function(e) {
        e.preventDefault();
        e.target.classList.add("active");

        menuItems.forEach(function(e) {
            e.classList.remove("active");
        });

        setConts.forEach(function(e, index) {
            index === (setConts.length - 1) ? e.classList.remove("hide") :  e.classList.add("hide");
        });
    });
}

function makeDim() {
    const body = document.querySelector("body"),
        dim = document.createElement("div");
    dim.classList.add("dimmed");
    body.appendChild(dim);
    dim.addEventListener("click", delDim);
}

function delDim() {
    const body = document.querySelector("body"),
        dimmed = document.querySelector(".dimmed"),
        modal = document.querySelector(".show-fade-in");
    body.removeChild(dimmed);
    if (modal !== null) {
        modal.classList.remove("show-fade-in");    
    }
    todoList.style.zIndex = 1000;
}

function checkClock() {
    chkClock.addEventListener("change", (event) => {
        const label = event.target.closest("div").parentElement.querySelector(".state");
        if (event.target.checked) {
            localStorage.setItem(VIEW_CLOCK_LS, "true");
            clockContainer.classList.remove("hide");
            label.classList.add("active");
        } else {
            localStorage.setItem(VIEW_CLOCK_LS, "false");
            clockContainer.classList.add("hide");
            label.classList.remove("active");
        }
    });
}

function checkGreet() {
    chkGreeting.addEventListener("change", (event) => {
        const label = event.target.closest("div").parentElement.querySelector(".state");
        if (event.target.checked) {
            localStorage.setItem(VIEW_GREET_LS, "true");
            greetWrap.classList.remove("hide");
            label.classList.add("active");
        } else {
            localStorage.setItem(VIEW_GREET_LS, "false");
            greetWrap.classList.add("hide");
            label.classList.remove("active");
        }
    });
}

function checkWeather() {
    chkWeather.addEventListener("change", (event) => {
        const label = event.target.closest("div").parentElement.querySelector(".state");
        if (event.target.checked) {
            localStorage.setItem(VIEW_WEATHER_LS, "true");
            weather.classList.remove("hide");
            label.classList.add("active");
        } else {
            localStorage.setItem(VIEW_WEATHER_LS, "false");
            weather.classList.add("hide");
            label.classList.remove("active");
        }
    });
}

function checkTodo() {
    chkTodo.addEventListener("change", (event) => {
        const label = event.target.closest("div").parentElement.querySelector(".state");
        if (event.target.checked) {
            localStorage.setItem(VIEW_TODO_LS, "true");
            todoWrap.classList.remove("hide");
            todoListWrap.classList.remove("hide");
            label.classList.add("active");
        } else {
            localStorage.setItem(VIEW_TODO_LS, "false");
            todoWrap.classList.add("hide");
            todoListWrap.classList.add("hide");
            label.classList.remove("active");
        }
    });
}

function checkHour() {
    chkHour12.addEventListener("change", (event) => {
        const label12 = event.target.closest("div").parentElement.querySelector(".state.hour12"),
            label24 = event.target.closest("div").parentElement.querySelector(".state.hour24");
        if (event.target.checked) {
            localStorage.setItem(HOUR12_LS, "true");
            clockContainer.classList.add("hour12");
            label12.classList.add("active");
            label24.classList.remove("active");
        } else {
            localStorage.setItem(HOUR12_LS, "false");
            clockContainer.classList.remove("hour12");
            label12.classList.remove("active");
            label24.classList.add("active");
        }
    });
}

function showSec() {
    chkSec.addEventListener("change", (event) => {
        const label = event.target.closest("div").parentElement.querySelector(".state");
        if (event.target.checked) {
            localStorage.setItem(SEC_LS, "true");
            clockSec.classList.remove("hide");
            label.classList.add("active");
        } else {
            localStorage.setItem(SEC_LS, "false");
            clockSec.classList.add("hide");
            label.classList.remove("active");
        }
    });
}

function handleSettings(event) {
    event.preventDefault();
    Settings.classList.toggle("show-fade-in");
    const modalOpen = Settings.classList.contains("show-fade-in");
    if (modalOpen) {
        todoList.style.zIndex = 998;
        makeDim();
    } else {
        todoList.style.zIndex = 1000;
        delDim();
    }
    selMenu();
}

function btnSettings() {
    btnSetting.addEventListener("click", handleSettings);
}

function lsInit(){
    const chkClockLabel = chkClock.closest("div").parentElement.querySelector(".state"),
        chkGreetingLabel = chkGreeting.closest("div").parentElement.querySelector(".state"),
        chkWeatherLabel = chkWeather.closest("div").parentElement.querySelector(".state"),
        chkTodoLabel = chkTodo.closest("div").parentElement.querySelector(".state"),
        chkHour12Label = chkHour12.closest("div").parentElement.querySelector(".state.hour12"),
        chkHour24Label = chkHour12.closest("div").parentElement.querySelector(".state.hour24"),
        chkSecLabel = chkSec.closest("div").parentElement.querySelector(".state");

    if(localStorage.getItem(VIEW_CLOCK_LS) == null) {
        localStorage.setItem(VIEW_CLOCK_LS, "true");
    }
    if(localStorage.getItem(VIEW_GREET_LS) == null) {
        localStorage.setItem(VIEW_GREET_LS, "true");
    }
    if(localStorage.getItem(VIEW_WEATHER_LS) == null) {
        localStorage.setItem(VIEW_WEATHER_LS, "true");
    }
    if(localStorage.getItem(VIEW_TODO_LS) == null) {
        localStorage.setItem(VIEW_TODO_LS, "true");
    }
    
    if (localStorage.getItem(VIEW_CLOCK_LS) == "true") {
        chkClock.checked = true;
        chkClockLabel.classList.add("active");
    } else {
        chkClock.checked = false;
        chkClockLabel.classList.remove("active");
    }
    if (localStorage.getItem(VIEW_GREET_LS) == "true") {
        chkGreeting.checked = true;
        chkGreetingLabel.classList.add("active");
    } else {
        chkGreeting.checked = false;
        chkGreetingLabel.classList.remove("active");
    }
    if (localStorage.getItem(VIEW_WEATHER_LS) == "true") {
        chkWeather.checked = true;
        chkWeatherLabel.classList.add("active");
    } else {
        chkWeather.checked = false;
        chkWeatherLabel.classList.remove("active");
    }
    if (localStorage.getItem(VIEW_TODO_LS) == "true") {
        chkTodo.checked = true;
        chkTodoLabel.classList.add("active");
    } else {
        chkTodo.checked = false;
        chkTodoLabel.classList.remove("active");
    }
    if (localStorage.getItem(HOUR12_LS) == "true") {
        chkHour12.checked = true;
        chkHour12Label.classList.add("active");
        chkHour24Label.classList.remove("active");
    } else {
        chkHour12.checked = false;
        chkHour12Label.classList.remove("active");
        chkHour24Label.classList.add("active");
    }
    if (localStorage.getItem(SEC_LS) == "true") {
        chkSec.checked = true;
        chkSecLabel.classList.add("active");
    } else {
        chkSec.checked = false;
        chkSecLabel.classList.remove("active");
    }
}

function setInit() {
    settingPanel.style.width = window.innerWidth - 14 + "px";

    lsInit();
    checkClock();
    checkGreet();
    checkWeather();
    checkTodo();
    checkHour();
    showSec();
    btnSettings();
}
setInit();