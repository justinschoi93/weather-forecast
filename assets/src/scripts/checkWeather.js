export default async function checkWeather ({lat, lon, name}, systemOfMeasurement) {
    const weather_api = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=${systemOfMeasurement}&appid=0b2949d3ba17a6aec298126cb969f7dc`;
    
    const response = await fetch(weather_api);
    
    if (!response.ok) {
        throw new Error('Network response was not ok. Could not check weather.')
    } else {
        const data = await response.json();
        data.name = name;
        
        return data;
    }
}