import { COUNTRIES } from './countryCodes.js';

//HTML elements
const displayName = document.getElementById('name-display');
const displayIcon = document.getElementById('icon-display');
const displayTemperature = document.getElementById('temperature-display');
const displayFeelsLike = document.getElementById('feels-like-display');
const displayTempMax = document.getElementById('temp-max-display');
const displayTempMin = document.getElementById('temp-min-display');
const displayDescription = document.getElementById('description-display');
const displaySunrise = document.getElementById('sunrise-display');
const displaySunset = document.getElementById('sunset-display');
const displayClouds = document.getElementById('clouds-display');
const displayWindSpeed = document.getElementById('wind-speed-display');
const displayWindDirection = document.getElementById('wind-direction-display');
const displayHumidity = document.getElementById('humidity-display');
const displayPressure = document.getElementById('pressure-display');
const searchHistory = document.getElementById('recent-searches');
const countrySelect = document.getElementById('country-select');
const stateSelect = document.getElementById('state-select');
const unitSelect = document.getElementById('unit-select');
const fiveDayForecast = document.getElementById('five-day-forecast');
const forecastDisplay = document.getElementById('forecast')

COUNTRIES.forEach( country => {
    const optionCountry = new Option(country.name, country['country-code']);
    countrySelect.appendChild(optionCountry); 
});

function isValidZipCode(zipCode) {
    return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipCode);
  }
// Function that defines the geocoding api based on the input
function getGeocodingAPI (searchBarInput, state, countryCode, unit) {
    let geocoding_api = '';

    if (isValidZipCode(searchBarInput)) { // if input is a zip code
        let zipcode = searchBarInput;
        geocoding_api = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode}&appid=0b2949d3ba17a6aec298126cb969f7dc`
    } else if (!state === 'Select a state (optional)') {
        let city = searchBarInput;
        geocoding_api = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${countryCode}&appid=0b2949d3ba17a6aec298126cb969f7dc`
    } else {
        let city = searchBarInput;
        geocoding_api = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${countryCode}&appid=0b2949d3ba17a6aec298126cb969f7dc`
    }
    return geocoding_api;
    // return   `http://api.openweathermap.org/geo/1.0/direct?q=Seoul,410&appid=0b2949d3ba17a6aec298126cb969f7dc`;
    // return `http://api.openweathermap.org/geo/1.0/zip?zip=94117&appid=0b2949d3ba17a6aec298126cb969f7dc`

};
// Function that finds coordinates of city by either city name or zip code
function getCoordinates (geocodingAPI) {

    console.log(geocodingAPI)

    if (geocodingAPI.includes('zip')) {4
        fetch(geocodingAPI)
            .then( response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok. Could not get coordinates.');
                }
                return response.json();
            })
            .then( data => {
                console.log(data)
                let lat = data.lat;
                let lon = data.lon;
                let name = data.name;
                
                checkWeather(lat, lon, name);
            })
    } else {
        fetch(geocodingAPI)
            .then( response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok. Could not get coordinates.');
                }
                return response.json();
            })
            .then( data => {
                if (data && data.length > 0) {
                    let lat = data[0].lat;
                    let lon = data[0].lon;
                    let name = data[0].name;
                    checkWeather(lat, lon, name);
                }
            })
    }
}
// Function that checks the weather using coordinates
function checkWeather (lat, lon, name) {
    forecastDisplay.classList.remove("hidden");
    const unit = unitSelect.options[unitSelect.selectedIndex].value;
    const unitDisplay = unitSelect.options[unitSelect.selectedIndex].text;
    const weather_api = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=${unit}&appid=0b2949d3ba17a6aec298126cb969f7dc`;
    
    fetch(weather_api)
        .then( response => {
            if (!response.ok) {
                throw new Error('Network response was not ok. Could not check weather.')
            } else {
                return response.json()
            }
        })
        .then( data => {
            
            console.log(data);
            // current weather
            let currentTemp = data.current.temp;
            let currentTempMax = data.daily[0].temp.max;
            let currentTempMin = data.daily[0].temp.min;
            let currentFeelsLike = data.current.feels_like;
            let currentHumidity = data.current.humidity;
            let currentWindDirection = data.current.wind_deg;
            let currentWindSpeed = data.current.wind_speed;
            let currentClouds = data.current.clouds;
            let currentVisibility = data.current.visibility;
            let currentPressure = data.current.pressure;
            // let currentSunrise = unixConverter(data.current.sunrise);
            // let currentSunset = unixConverter(data.current.sunset);
            let currentDescription = data.current.weather[0].description;
            let currentIcon = data.current.weather[0].icon;

            // 5 day forecast
            data.daily.forEach( (day, index) => {

                const forecast = {
                    day: index,
                    icon: day.weather[0].icon,
                    humidity: day.humidity,
                    moonPhase: day.moon_phase,
                    moonrise: day.moonrise,
                    moonset: day.moonset,
                    summary: day.summary,
                    // sunrise: unixConverter(day.sunrise),
                    // sunset: unixConverter(day.sunset),
                    dayTemp: day.temp.day,
                    nightTemp: day.temp.night,
                    eveTemp: day.temp.eve,  
                    mornTemp: day.temp.morn,
                    lowTemp: day.temp.min,
                    highTemp: day.temp.max,
                    windDirection: day.wind_deg,
                    windSpeed: day.wind_speed,
                    clouds: day.clouds,
                };

                if (index === 0) {forecast.day = 'Today'};
                if (index === 1) {forecast.day = 'Tomorrow'};
                if (index === 2) {forecast.day = 'Day after tomorrow'};
                if (index === 3) {forecast.day = 'Day after the day after tomorrow'};
                if (index === 4) {forecast.day = '4 days from now'};
                if (index === 5) {forecast.day = '5 days from now'};
                if (index === 6) {forecast.day = '6 days from now'};
                if (index === 7) {forecast.day = '7 days from now'}
                
                // forecast.day.setAttribute("class", "forecast-day");
                
                let weatherCard = document.createElement("div");
                weatherCard.setAttribute("id", `day-${index}`);
                weatherCard.className = "weather-card"

                let weatherIcon = document.createElement("img");
                weatherCard.appendChild(weatherIcon);
                fiveDayForecast.appendChild(weatherCard);

                Object.entries(forecast).forEach( ([key, value]) => {
                    let entry 
                    if (key === "icon") {
                        entry = document.createElement("img");
                        entry.setAttribute("id", `day-${index}-${key}`)
                        entry.setAttribute("src", "http://openweathermap.org/img/wn/" + value + ".png")
                    } else {
                        entry = document.createElement("div");
                        entry.setAttribute("id", `day-${index}-${key}`);
                        if (key === "day") {entry.setAttribute("class", "forecast-day")};
                        if (typeof value === "number") {value = parseFloat(value.toFixed(1)).toString() + " " + unitDisplay};
                        entry.innerHTML = key + ": " + value;    
                    }
                    weatherCard.appendChild(entry);
                })

               
            })

            // Display current weather
            displayName.innerHTML = name;
            displayIcon.setAttribute('src', `https://openweathermap.org/img/wn/${currentIcon}@2x.png`);
            displayTemperature.innerHTML = `Current Temperature: ${parseFloat(currentTemp.toFixed(1))} ${unitDisplay}`;
            displayFeelsLike.innerHTML = `Feels like: ${parseFloat(currentFeelsLike.toFixed(1))} ${unitDisplay}`;
            displayTempMax.innerHTML = `High: ${parseFloat(currentTempMax.toFixed(1))} ${unitDisplay}`;
            displayTempMin.innerHTML = `Low: ${parseFloat(currentTempMin.toFixed(1))} ${unitDisplay}`;
            displayDescription.innerHTML = `Clouds: ${currentDescription}`;
            // displaySunrise.innerHTML = `Sunrise: ${currentSunrise}`;
            // displaySunset.innerHTML = `Sunset: ${currentSunset}`;
            displayWindSpeed.innerHTML = `Wind speed: ${parseFloat(currentWindSpeed.toFixed(1))} ${unitDisplay}`;
            displayWindDirection.innerHTML = `Wind direction: ${currentWindDirection}`;
            displayHumidity.innerHTML = `Humidity: ${currentHumidity}`;
            displayPressure.innerHTML = `Pressure: ${currentPressure}`;
            
            // Add new city to recent history
            const searchedCitiesList = Array.from(searchHistory.querySelectorAll("li.searched-city"));
            const searchedCitiesIds = searchedCitiesList.map( city => city.getAttribute("id"));
            
            if (!searchedCitiesIds.includes(name)) {
                let searchedCity = document.createElement("li");
                searchedCity.setAttribute("class", "searched-city");
                searchedCity.setAttribute("id", name);
                searchedCity.innerHTML = name;
                searchHistory.appendChild(searchedCity);
            };
        })
}
// This function converts unix time to PST
// function unixConverter (unix) {
//     if (typeof moment === "undefined" || typeof moment.tz === "undefined") {
//         console.error("moment-timezone is required for this function to work.");
//         return;
//     }

//     const PST = moment.unix(unix).tz("America/Los_Angeles").format("HH:mm:ss a");
//     return PST;
// }

// Search Bar including submit button
const searchBar = document.getElementById("search-button");
searchBar.addEventListener( 'click', (event) => {
    event.preventDefault();
    const searchBarInput = document.getElementById('city-search').value;
    const countryCode = countrySelect.options[countrySelect.selectedIndex].value;
    const state = stateSelect.options[stateSelect.selectedIndex].value;
    const geocodingAPI = getGeocodingAPI(searchBarInput, state, countryCode)
            getCoordinates(geocodingAPI);
});

