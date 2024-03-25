// Functions

import { COUNTRIES } from './db/countryCodes.js';
import { STATES }  from './db/states.js';
import getGeocodingAPI from './src/scripts/getGeocodingAPI.js';
import getCoordinates from './src/scripts/getCoordinates.js';
import checkWeather from './src/scripts/checkWeather.js';
import displayWeather from './src/scripts/displayWeather.js';

// Creates options for State and Country Select menus
const countrySelect = document.getElementById('country-select');
const stateSelect = document.getElementById('state-select');


const searchBar = document.getElementById("search-button");
const searchBarHandler = async (e) => {
    e.preventDefault();

    const searchBarInput = document.getElementById('city-search').value;
    const countryCode = countrySelect.options[countrySelect.selectedIndex].value;
    const state = stateSelect.options[stateSelect.selectedIndex].value;
    const unit = document.getElementById('unit-select').value;
    const geocodingAPI = await getGeocodingAPI(searchBarInput, state, countryCode)
    console.log(geocodingAPI);
    const coordinates = await getCoordinates(geocodingAPI);
    console.log('coordinates: ', coordinates);
    const data = await checkWeather(coordinates, unit);
    console.log('data: ', data);
    displayWeather(data);
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
