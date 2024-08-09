//CurrentDate
let now = new Date();

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
let currentDay = days[now.getDay()];
let currentHour = now.getHours();
let currwntMinutes = now.getMinutes();

currentHour = currentHour.toString().padStart(2, "0");
currwntMinutes = currwntMinutes.toString().padStart(2, "0");

let cityDetails = document.querySelector("#weather-details");
cityDetails.innerHTML = `${currentDay} ${currentHour}:${currwntMinutes}, moderate rain`;

// API Key
let apiKey = "37f3t39eac96fab30d307f44oba2bb5e";

// Function to get and update temperature
function updateCityAndTemperature(event) {
    event.preventDefault();

    // Update City Name
    let cityInput = document.querySelector("input#search-input");
    let cityLabel = document.querySelector("h1#city-name");
    cityLabel.innerHTML = cityInput.value;

    // Get and Update Temperature
    let city = cityInput.value;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios
        .get(apiUrl)
        .then(function (response) {
            let temperature = Math.round(response.data.temperature.current);
            let temperatureElement = document.querySelector(
                "#current-temp-value"
            );
            temperatureElement.innerHTML = `${temperature}`;
        })
        .catch(function (error) {
            console.error(
                "There was an error fetching the weather data:",
                error
            );
            let temperatureElement = document.querySelector(
                "#current-temp-value"
            );
            temperatureElement.innerHTML = "##";
        });
}

// Event listener for the form submission
let form = document.querySelector("#search-form");
form.addEventListener("submit", updateCityAndTemperature);
