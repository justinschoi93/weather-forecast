////////////// Key Variables

var weather_api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
var geocoding_api = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=${limit}&appid=${key}`
var key = "0b2949d3ba17a6aec298126cb969f7dc";
var lat = 0;
var lon = 0;
var city;
var state;
var country;

