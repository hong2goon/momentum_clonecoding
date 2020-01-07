const setForm = document.querySelector(".js-settingForm"),
    checkbox = setForm.querySelector("input[type=checkbox]");

const HOUR12_LS = "hour12";

function checkHour() {
    checkbox.addEventListener("change", (event) => {
        if (event.target.checked) {
            localStorage.setItem(HOUR12_LS, true);
            clockContainer.classList.add("hour12");
        } else {
            localStorage.setItem(HOUR12_LS, false);
            clockContainer.classList.remove("hour12");
        }
    });
}

function setInit() {
    localStorage.getItem("hour12") == "true" ? checkbox.checked = true : checkbox.checked = false;
    checkHour();
}
setInit();