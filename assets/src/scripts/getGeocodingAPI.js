import isValidZip from "./isValidZip.js";

export default async function getGeocodingAPI (searchBarInput, state, countryCode) {
    let geocoding_api = '';

    if (isValidZip(searchBarInput)) { // if input is a zip code
        let zipcode = searchBarInput;
        geocoding_api = `https://api.openweathermap.org/geo/1.0/zip?zip=${zipcode}&appid=0b2949d3ba17a6aec298126cb969f7dc`
    } else if (!state === 'Select a state (optional)') {
        let city = searchBarInput;
        geocoding_api = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${countryCode}&appid=0b2949d3ba17a6aec298126cb969f7dc`
    } else {
        let city = searchBarInput;
        geocoding_api = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${countryCode}&appid=0b2949d3ba17a6aec298126cb969f7dc`
    }
    return geocoding_api;
    // return   `http://api.openweathermap.org/geo/1.0/direct?q=Seoul,410&appid=0b2949d3ba17a6aec298126cb969f7dc`;
    // return `http://api.openweathermap.org/geo/1.0/zip?zip=94117&appid=0b2949d3ba17a6aec298126cb969f7dc`

};
