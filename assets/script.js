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

const display = {

}
// Search Bar including submit button
var searchBar = document.getElementById("search-button")
                        .addEventListener( 'click', (event) => {
                            event.preventDefault();
                            var searchBarInput = document.getElementById('city-search').value;

                            getCoordinates(searchBarInput);

                            // if searchBarInput is a zipcode, use zipAPI (use regex)
                            //// if searchBarInput can be converted into a number and is 5 digits long, use zipAPI
                            // if searchBarInput is a string and cannot be converted into a number, use cityAPI (use regex)
                        });


// Function that finds coordinates of city by either city name or zip code
function getCoordinates (city) {
    console.log(city);
    var state;
    var country;
    
    var geocoding_api = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=0b2949d3ba17a6aec298126cb969f7dc`
    // var geocoding_api = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&appid=0b2949d3ba17a6aec298126cb969f7dc`
    
    fetch(geocoding_api)
        .then( response => {
            if (!response.ok) {
                throw new Error('Network response was not ok. Could not get coordinates.');
            }
            return response.json();
        })
        .then( data => {
            if (data && data.length > 0) {
                var lat = data[0].lat;
                var lon = data[0].lon;
                
                checkWeather(lat, lon);
            }
        })
}

function checkWeather (lat, lon) {
    
    var weather_api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0b2949d3ba17a6aec298126cb969f7dc`;
    console.log(weather_api);
    fetch(weather_api)
        .then( response => {
            if (!response.ok) {
                throw new Error('Network response was not ok. Could not check weather.')
            } else {
                return response.json()
            }
        })
        .then( data => {

            displayName.innerHTML = data.name;
            displayIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            displayTemperature.innerHTML = data.main.temp;
            displayFeelsLike.innerHTML = data.main.feels_like;
            displayTempMax.innerHTML = data.main.temp_max;
            displayTempMin.innerHTML = data.main.temp_min;
            displayDescription.innerHTML = data.weather[0].description;
            displaySunrise.innerHTML = data.sys.sunrise;
            displaySunset.innerHTML = data.sys.sunset;
            displayWindSpeed.innerHTML = data.wind.speed;
            displayWindDirection.innerHTML = data.wind.deg;
            displayHumidity.innerHTML = data.main.humidity;
            displayPressure.innerHTML = data.main.pressure;

            // console.log(displayName.innerHTML);
        })

}


