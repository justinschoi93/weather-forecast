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
const displayWindSpeed = document.getElementById('wind-speed-display');
const displayWindDirection = document.getElementById('wind-direction-display');
const displayHumidity = document.getElementById('humidity-display');
const displayPressure = document.getElementById('pressure-display');
const recentHistory = document.getElementById('recent-history');
const countrySelect = document.getElementById('country-select');
const stateSelect = document.getElementById('state-select');
const unitSelect = document.getElementById('unit-select');
const fiveDayForecast = document.getElementById('five-day-forecast');

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
    } else if (state) {
        let city = searchBarInput;
        geocoding_api = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${countryCode}&appid=0b2949d3ba17a6aec298126cb969f7dc`
    } else {
        let city = searchBarInput;
        geocoding_api = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${countryCode}&appid=0b2949d3ba17a6aec298126cb969f7dc`
    }
    return geocoding_api;
};
// Function that finds coordinates of city by either city name or zip code
function getCoordinates (geocodingAPI) {

    console.log(geocodingAPI)

    if (geocodingAPI.includes('zip')) {
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
                    console.log(name)
                    checkWeather(lat, lon, name);
                }
            })
    }
}
// Function that checks the weather using coordinates
function checkWeather (lat, lon, name) {
    const unit = unitSelect.options[unitSelect.selectedIndex].value;
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
            let currentSunrise = data.current.sunrise;
            let currentSunset = data.current.sunset;
            let currentDescription = data.current.weather[0].description;
            let currentIcon = data.current.weather[0].icon;

            // 5 day forecast
            data.daily.forEach( (day, index) => {

                const forecast = {
                    day: index,
                    dayFeelsLike: day.feels_like.day,
                    nightFeelsLIke: day.feels_like.night,
                    eveFeelsLike: day.feels_like.eve,
                    mornFeelsLike: day.feels_like.morn,
                    humidity: day.humidity,
                    moonPhase: day.moon_phase,
                    moonrise: day.moonrise,
                    moonset: day.moonset,
                    summary: day.summary,
                    sunrise: day.sunrise,
                    sunset: day.sunset,
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
                

                let weatherCard = document.createElement("div");
                weatherCard.setAttribute("id", `day-${index}`);
                
                Object.entries(forecast).forEach( ([key, value]) => {
                    let entry = document.createElement("div");
                    entry.setAttribute("id", `day-${index}-${key}`);
                    entry.innerHTML = value;    
                    weatherCard.appendChild(entry);
                })

                let weatherIcon = document.createElement("img");
                weatherIcon.src = "http://openweathermap.org/img/wn/" + day.weather[0].icon + ".png";
                weatherCard.appendChild(weatherIcon);
                fiveDayForecast.appendChild(weatherCard);
            })

            // display data
            displayName.innerHTML = name;
            displayIcon.setAttribute('src', `https://openweathermap.org/img/wn/${currentIcon}@2x.png`);
            displayTemperature.innerHTML = `Current Temperature: ${currentTemp}`;
            displayFeelsLike.innerHTML = `Feels like: ${currentFeelsLike}`;
            displayTempMax.innerHTML = `High: ${currentTempMax}`;
            displayTempMin.innerHTML = `Low: ${currentTempMin}`;
            displayDescription.innerHTML = currentDescription;
            displaySunrise.innerHTML = `Sunrise: ${currentSunrise}`;
            displaySunset.innerHTML = `Sunset: ${currentSunset}`;
            displayWindSpeed.innerHTML = `Wind speed: ${currentWindSpeed}`;
            displayWindDirection.innerHTML = `Wind direction: ${currentWindDirection}`;
            displayHumidity.innerHTML = `Humidity: ${currentHumidity}`;
            displayPressure.innerHTML = `Pressure: ${currentPressure}`;
            
            // Add new city to recent history
            const searchedCitiesList = Array.from(recentHistory.querySelectorAll("li.searched-city"));
            const searchedCitiesIds = searchedCitiesList.map( city => city.getAttribute("id"));
            
            if (!searchedCitiesIds.includes(name)) {
                let searchedCity = document.createElement("li");
                searchedCity.setAttribute("class", "searched-city");
                searchedCity.setAttribute("id", name);
                searchedCity.innerHTML = name;
                recentHistory.appendChild(searchedCity);
            };
        })
}

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

