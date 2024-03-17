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
const measurementUnit = document.getElementById('measurement-units').value;
const countrySelect = document.getElementById('country-select');
const stateSelect = document.getElementById('state-select');


COUNTRIES.forEach( country => {
    const optionCountry = new Option(country.name, country['country-code']);
    countrySelect.appendChild(optionCountry); 
});
document.addEventListener('DOMContentLoaded', async (event) => {
    event.preventDefault();
    // Search Bar including submit button
    const searchBar = document.getElementById("search-button")
                            .addEventListener( 'click', (event) => {
                                event.preventDefault();
                                const searchBarInput = document.getElementById('city-search').value;
                                const countryCode = countrySelect.options[countrySelect.selectedIndex].value;
                                const state = stateSelect.options[stateSelect.selectedIndex].value;
                                getCoordinates(searchBarInput, state, countryCode);
                            });


    // Function that finds coordinates of city by either city name or zip code
    function getCoordinates (searchBarInput, state, countryCode) {
        let geocoding_api = ''

        if (typeof searchBarInput === 'number' && searchBarInput.toString().length === 5) {
            let zipcode = searchBarInput;
            geocoding_api = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode},${countryCode}&appid=0b2949d3ba17a6aec298126cb969f7dc`
        } else if (state) {
            let city = searchBarInput;
            geocoding_api = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${countryCode}&appid=0b2949d3ba17a6aec298126cb969f7dc`
        } else {
            let city = searchBarInput;
            geocoding_api = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${countryCode}&appid=0b2949d3ba17a6aec298126cb969f7dc`
        }

        fetch(geocoding_api)
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
                    
                    checkWeather(lat, lon);
                }
            })
    }

    function checkWeather (lat, lon) {
        
        const weather_api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0b2949d3ba17a6aec298126cb969f7dc`;
        const fivedayforecast_api = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=0b2949d3ba17a6aec298126cb969f7dc`
        
        fetch(weather_api)
            .then( response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok. Could not check weather.')
                } else {
                    return response.json()
                }
            })
            .then( data => {
                
                // convert to desired measurement unit
                if (measurementUnit === 'farenheit') {
                    data.main.temp = parseFloat((data.main.temp - 273.15) * 9/5 + 32).toFixed(1);
                    data.main.feels_like = parseFloat((data.main.feels_like - 273.15) * 9/5 + 32).toFixed(1);
                    data.main.temp_max = parseFloat((data.main.temp_max - 273.15) * 9/5 + 32).toFixed(1);
                    data.main.temp_min = parseFloat((data.main.temp_min - 273.15) * 9/5 + 32).toFixed(1);
                } else if (measurementUnit === 'celsius') {
                    data.main.temp = parseFloat(data.main.temp - 273.15).toFixed(1);
                    data.main.feels_like = parseFloat(data.main.feels_like - 273.15).toFixed(1);
                    data.main.temp_max = parseFloat(data.main.temp_max - 273.15).toFixed(1);
                    data.main.temp_min = parseFloat(data.main.temp_min - 273.15).toFixed(1);
                }

                // display data
                displayName.innerHTML = data.name;
                displayIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
                displayTemperature.innerHTML = `Current Temperature: ${data.main.temp}`;
                displayFeelsLike.innerHTML = `Feels like: ${data.main.feels_like}`;
                displayTempMax.innerHTML = `High: ${data.main.temp_max}`;
                displayTempMin.innerHTML = `Low: ${data.main.temp_min}`;
                displayDescription.innerHTML = data.weather[0].description;
                displaySunrise.innerHTML = `Sunrise: ${data.sys.sunrise}`;
                displaySunset.innerHTML = `Sunset: ${data.sys.sunset}`;
                displayWindSpeed.innerHTML = `Wind speed: ${data.wind.speed}`;
                displayWindDirection.innerHTML = `Wind direction: ${data.wind.deg}`;
                displayHumidity.innerHTML = `Humidity: ${data.main.humidity}`;
                displayPressure.innerHTML = `Pressure: ${data.main.pressure}`;
                
                // Add new city to recent history
                const searchedCitiesList = Array.from(recentHistory.querySelectorAll("li.searched-city"));
                const searchedCitiesIds = searchedCitiesList.map( city => city.getAttribute("id"));
                
                if (!searchedCitiesIds.includes(data.name)) {
                    let searchedCity = document.createElement("li");
                    searchedCity.setAttribute("class", "searched-city");
                    searchedCity.setAttribute("id", data.name);
                    searchedCity.innerHTML = data.name;
                    recentHistory.appendChild(searchedCity)
                }
                
                // console.log(searchedCitiesIds);
                // console.log(searchedCity);
                // console.log(displayName.innerHTML);
            })

        fetch(fivedayforecast_api)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });

    }

})
