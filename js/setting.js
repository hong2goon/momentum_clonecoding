const Settings = document.querySelector(".settings"),
    btnSetting = Settings.querySelector(".btn-setting");

const navMenu = Settings.querySelector(".nav-menu"),
    menuItems = navMenu.querySelectorAll("li"),
    setConts = Settings.querySelectorAll(".set-cont");

const 
    setForm1 = document.querySelector(".js-settingForm1"),
    chkClock = setForm1.querySelector("input.chk-clock"),
    chkGreeting = setForm1.querySelector("input.chk-greeting");

const 
    setForm2 = document.querySelector(".js-settingForm2"),
    chkHour12 = setForm2.querySelector("input.chk-12h"),
    chkSec = setForm2.querySelector("input.chk-sec");

const VIEW_CLOCK_LS = "view clock",
    VIEW_GREET_LS = "view greeting",
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
    event.stopPropagation();
    Settings.classList.toggle("show-fade-in");
    selMenu();
}

function btnSettings() {
    btnSetting.addEventListener("click", handleSettings);
}

function setPanelClose() {
    document.addEventListener("click", function(event){
        event.preventDefault();
        // if (!event.target.parentElement.classList.contains("setting")) {
        //     const panelOpen = Settings.classList.contains("show-fade-in");
        //     panelOpen ? Settings.classList.remove("show-fade-in") : null;
        // }
    })
}

function lsInit(){
    if(localStorage.getItem("view clock") == null) {
        localStorage.setItem("view clock", "true");
    }
    if(localStorage.getItem("view greeting") == null) {
        localStorage.setItem("view greeting", "true");
    }
    
    localStorage.getItem("view clock") == "true" ? chkClock.checked = true : chkClock.checked = false;
    localStorage.getItem("view clock") == "true" ? chkGreeting.checked = true : chkGreeting.checked = false;
    localStorage.getItem("hour12") == "true" ? chkHour12.checked = true : chkHour12.checked = false;
    localStorage.getItem("seconds") == "true" ? chkSec.checked = true : chkSec.checked = false;
}

function setInit() {
    lsInit();
    checkClock();
    checkGreet();
    checkHour();
    showSec();
    btnSettings();
    setPanelClose();
}
setInit();