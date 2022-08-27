function showTemperature(response) {
    let temperatureElement = document.querySelector("#temp");
    let cityElement = document.querySelector("#city");
    let humidityElement = document.querySelector("#hum");
    let windElement=document.querySelector("#wind")
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    let weatherCondition = document.querySelector("#weather-cond");
    weatherCondition.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
  
    windElement.innerHTML = Math.round(response.data.wind.speed);
}
let apiKey = "1198758847d63b62f48537f6840537aa";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;
console.log(apiUrl);
    axios.get(apiUrl).then(showTemperature);