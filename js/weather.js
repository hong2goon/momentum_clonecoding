const API_KEY = "8743111fa6f5791c62e48884c89d323a";
const COORDS = "coords";

const weather = document.querySelector(".js-weather"),
    metricStat = weather.querySelector(".metric-stat"),
    metricLocation = weather.querySelector(".location");

function getWeather(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).then(function(response) {
         return response.json();
    }).then(function(json) {
        console.log(json.weather[0]);
        const temperature = json.main.temp,
            description = json.weather[0].description,
            iconCode = json.weather[0].icon,
            place = json.name;
        metricStat.innerHTML = `<span class="icon-weather"><img src="http://openweathermap.org/img/w/${iconCode}.png" alt="${description}" title="${description}"></span><span class="metric-stat-number">${temperature.toFixed(1)}</span><span class="degree">°</span>`;
        metricLocation.innerHTML = `${place}`;
    });
} 

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
    const latitude = position.coords.latitude,
        longitude = position.coords.longitude,
        coordsObj = {
            latitude,
            longitude
        };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log('Cant access geo location');
} 

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null || loadedCoords === "null") {
        localStorage.setItem(COORDS, "null");
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function wtInit() {
    loadCoords();
}
wtInit();