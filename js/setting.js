const Settings = document.querySelector(".settings"),
    btnSetting = Settings.querySelector(".btn-setting"),
    setForm = document.querySelector(".js-settingForm"),
    chkHour12 = setForm.querySelector("input.chk-12h"),
    chkSec = setForm.querySelector("input.chk-sec");

const HOUR12_LS = "hour12",
    SEC_LS = "show seconds";

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
        const sec = clockTime.querySelector(".seconds");
        if (event.target.checked) {
            localStorage.setItem(SEC_LS, "true");
           sec.classList.add("hide");
        } else {
            localStorage.setItem(SEC_LS, "false");
            sec.classList.remove("hide");
        }
    });
}

function handleSettings() {
    Settings.classList.toggle("show-fade-in");
}

function btnSettings() {
    btnSetting.addEventListener("click", handleSettings);
}

function setInit() {
    localStorage.getItem("hour12") == "true" ? chkHour12.checked = true : chkHour12.checked = false;
    localStorage.getItem("show seconds") == "true" ? chkSec.checked = true : chkSec.checked = false;
    btnSettings();
    checkHour();
    showSec();
}
setInit();