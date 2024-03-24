export default function checkWeather (lat, lon, name) {
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
            return data;
        })
}