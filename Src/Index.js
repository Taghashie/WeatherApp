function formatDate(timestamp) {
    //let date = new Date(timestamp);
    let currentTime = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes;
     let day = date.getDay();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    if (minutes < 10) {
        munites = `0${minutes}`;
    }
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
   

    
    return `${day} ${hours}:${minutes}`
}


function showTemperature(response) {
    let temperatureElement = document.querySelector("#temp");
    let cityElement = document.querySelector("#city");
    let humidityElement = document.querySelector("#hum");
    let windElement=document.querySelector("#wind")
    let dateElement = document.querySelector("#time");
    let iconElement = document.querySelector("#icon")
    //let DateElement = document.querySelector("#date");
    let weatherCondition = document.querySelector("#weather-cond");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    weatherCondition.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    //DateElement.innerHTML = formatDate(response.data.dt * 1000);
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt", response.data.weather[0].description);
    dateElement.innerHTML = formatDate(currentTime);
    windElement.innerHTML = Math.round(response.data.wind.speed);



}
let apiKey = "1198758847d63b62f48537f6840537aa";
let city="Abuja"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
console.log(apiUrl);
    axios.get(apiUrl).then(showTemperature);