// Functions

import { COUNTRIES } from './db/countryCodes.js';
import { STATES }  from './db/states.js';
import getGeocodingAPI from './src/scripts/getGeocodingAPI.js';
import getCoordinates from './src/scripts/getCoordinates.js';
import checkWeather from './src/scripts/checkWeather.js';
import parseData from './src/scripts/parseData.js';
import displayData from './src/scripts/displayData.js';
import unsplash from './src/scripts/unsplash.js';

// Creates options for State and Country Select menus
const countrySelect = document.getElementById('country-select');
const stateSelect = document.getElementById('state-select');


const searchBar = document.getElementById("search-button");

const searchBarHandler = async (e) => {
    e.preventDefault();

    // Get the values from the user and form
    const searchBarInput = document.getElementById('city-search').value;
    const countryCode = countrySelect.options[countrySelect.selectedIndex].value;
    const state = stateSelect.options[stateSelect.selectedIndex].value;
    const systemOfMeasurement = document.getElementById('unit-select').value;
    const unit = systemOfMeasurement === 'imperial' ? '°F' : '°C';

    // Collect & display data
    const geocodingAPI = await getGeocodingAPI(searchBarInput, state, countryCode)
    const coordinates = await getCoordinates(geocodingAPI);
    const data = await checkWeather(coordinates);
    const weatherData = await parseData(data);
    const imgUrl = await unsplash(weatherData.current.description); // can I do this?
    weatherData.imgUrl = imgUrl;
    displayData(weatherData, unit);
    const weatherCards = document.querySelectorAll('.weather-card');
    weatherCards.forEach( card => {
        card.classList.remove('hidden');
    });


    


}
searchBar.addEventListener( 'click', searchBarHandler);

document.addEventListener('DOMContentLoaded', () => {
    COUNTRIES.forEach( country => {
        // console.log(country);
        const optionCountry = new Option(country.name, country['country-code']);
        countrySelect.appendChild(optionCountry); 
    });
    
    STATES.forEach( state => {
        // console.log(state);
        const optionState = new Option(state);
        stateSelect.appendChild(optionState); 
    });
})
