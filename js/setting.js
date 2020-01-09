const Settings = document.querySelector(".settings"),
    btnSetting = Settings.querySelector(".btn-setting");

const navMenu = Settings.querySelector(".nav-menu"),
    menuItems = navMenu.querySelectorAll("li"),
    setConts = Settings.querySelectorAll(".set-cont");

const setForm1 = document.querySelector(".js-settingForm1"),
    chkClock = setForm1.querySelector("input.chk-clock"),
    chkGreeting = setForm1.querySelector("input.chk-greeting"),
    chkTodo = setForm1.querySelector("input.chk-todo");

const setForm2 = document.querySelector(".js-settingForm2"),
    chkHour12 = setForm2.querySelector("input.chk-12h"),
    chkSec = setForm2.querySelector("input.chk-sec");

const VIEW_CLOCK_LS = "view clock",
    VIEW_GREET_LS = "view greeting",
    VIEW_TODO_LS = "view todo",
    HOUR12_LS = "hour12",
    SEC_LS = "seconds";

function selMenu() {
    for (let i=0; i<menuItems.length; i++) {
        menuItems[i].querySelector("a").addEventListener("click", function(e) {
            e.preventDefault();
            if (this.parentElement.previousElementSibling !== null) {
                this.parentElement.previousElementSibling.classList.remove("active");
            }
            if (this.parentElement.nextElementSibling !== null) {
                this.parentElement.nextElementSibling.classList.remove("active");
            }
            this.parentElement.classList.add("active");
            if (setConts[i].previousElementSibling !== null) {
                setConts[i].previousElementSibling.classList.add("hide");
            }
            if (setConts[i].nextElementSibling !== null) {
                setConts[i].nextElementSibling.classList.add("hide");
            }
            setConts[i].classList.remove("hide");

            const menuTit = this.textContent;
            if (menuTit === "clock") {
                
            }
        });
    }
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
}

function checkClock() {
    chkClock.addEventListener("change", (event) => {
        if (event.target.checked) {
            localStorage.setItem(VIEW_CLOCK_LS, "true");
            clockContainer.classList.remove("hide");
        } else {
            localStorage.setItem(VIEW_CLOCK_LS, "false");
            clockContainer.classList.add("hide");
        }
    });
}

function checkGreet() {
    chkGreeting.addEventListener("change", (event) => {
        if (event.target.checked) {
            localStorage.setItem(VIEW_GREET_LS, "true");
            greetWrap.classList.remove("hide");
        } else {
            localStorage.setItem(VIEW_GREET_LS, "false");
            greetWrap.classList.add("hide");
        }
    });
}

function checkTodo() {
    chkTodo.addEventListener("change", (event) => {
        if (event.target.checked) {
            localStorage.setItem(VIEW_TODO_LS, "true");
            todoWrap.classList.remove("hide");
            todoListWrap.classList.remove("hide");
        } else {
            localStorage.setItem(VIEW_TODO_LS, "false");
            todoWrap.classList.add("hide");
            todoListWrap.classList.add("hide");
        }
    });
}

function checkHour() {
    chkHour12.addEventListener("change", (event) => {
        if (event.target.checked) {
            localStorage.setItem(HOUR12_LS, "true");
            clockContainer.classList.add("hour12");
        } else {
            localStorage.setItem(HOUR12_LS, "false");
            clockContainer.classList.remove("hour12");
        }
    });
}

function showSec() {
    chkSec.addEventListener("change", (event) => {
        if (event.target.checked) {
            localStorage.setItem(SEC_LS, "true");
            clockSec.classList.remove("hide");
        } else {
            localStorage.setItem(SEC_LS, "false");
            clockSec.classList.add("hide");
        }
    });
}

function handleSettings(event) {
    event.preventDefault();
    Settings.classList.toggle("show-fade-in");
    const modalOpen = Settings.classList.contains("show-fade-in");
    modalOpen ? makeDim() : delDim();
    selMenu();
}

function btnSettings() {
    btnSetting.addEventListener("click", handleSettings);
}

function lsInit(){
    if(localStorage.getItem(VIEW_CLOCK_LS) == null) {
        localStorage.setItem(VIEW_CLOCK_LS, "true");
    }
    if(localStorage.getItem(VIEW_GREET_LS) == null) {
        localStorage.setItem(VIEW_GREET_LS, "true");
    }
    if(localStorage.getItem(VIEW_TODO_LS) == null) {
        localStorage.setItem(VIEW_TODO_LS, "true");
    }
    
    localStorage.getItem(VIEW_CLOCK_LS) == "true" ? chkClock.checked = true : chkClock.checked = false;
    localStorage.getItem(VIEW_GREET_LS) == "true" ? chkGreeting.checked = true : chkGreeting.checked = false;
    localStorage.getItem(VIEW_TODO_LS) == "true" ? chkTodo.checked = true : chkTodo.checked = false;
    localStorage.getItem(HOUR12_LS) == "true" ? chkHour12.checked = true : chkHour12.checked = false;
    localStorage.getItem(SEC_LS) == "true" ? chkSec.checked = true : chkSec.checked = false;
}

function setInit() {
    lsInit();
    checkClock();
    checkGreet();
    checkTodo();
    checkHour();
    showSec();
    btnSettings();
}
setInit();