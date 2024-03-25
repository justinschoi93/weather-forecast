export default async function parseData (data) {
    const weatherData = {};
    
    ///////////////////////////////////  Data
    ////// Hourly, starting with current
    weatherData.current = {
        name: data.name,
        icon: data.current.weather[0].icon,
        description: data.current.weather[0].description,
        temperature: data.current.temp,
        feelsLike: data.current.feels_like,
        humidity: data.current.humidity,
        pressure: data.current.pressure,
        windSpeed: data.current.wind_speed,
        windDirection: data.current.wind_deg,
        sunrise: data.current.sunrise,
        sunset: data.current.sunset,
    };
    weatherData.daily = {};

    /////// Daily, starting with tomorrow
    const day = {
        0: 'Today',
        1: 'Tomorrow',
        2: 'Day after tomorrow',
        3: 'Day after the day after tomorrow',
        4: '4 days from now',
        5: '5 days from now',
        6: '6 days from now',
        7: '7 days from now'
    };
    // console.log(data.daily);
    
    data.daily.forEach( (res, index) => {
        // console.log(obj)
        weatherData.daily[index] = {
            day: day[index],
            icon: res.weather[0].icon,
            summary: res.weather[0].summary,
            tempMorn: res.temp.morn,
            tempMin: res.temp.min,
            tempDay: res.temp.day,
            tempMax: res.temp.max,
            tempEve: res.temp.eve,
            tempNight: res.temp.night,
            feelsLike: res.feels_like.day,
            humidity: res.humidity,
            pressure: res.pressure,
            windSpeed: res.wind_speed,
            windDirection: res.wind_deg,
            sunrise: res.sunrise,
            sunset: res.sunset,
        }
    });
    
    
    console.log('weatherData.daily: ', weatherData.daily);
    return weatherData;
}



// // current weather


// // 5 day forecast
// data.daily.forEach( (day, index) => {

//     const forecast = {
//         day: index,
//         icon: day.weather[0].icon,
//         humidity: day.humidity,
//         moonPhase: day.moon_phase,
//         moonrise: day.moonrise,
//         moonset: day.moonset,
//         summary: day.summary,
//         // sunrise: unixConverter(day.sunrise),
//         // sunset: unixConverter(day.sunset),
//         dayTemp: day.temp.day,
//         nightTemp: day.temp.night,
//         eveTemp: day.temp.eve,  
//         mornTemp: day.temp.morn,
//         lowTemp: day.temp.min,
//         highTemp: day.temp.max,
//         windDirection: day.wind_deg,
//         windSpeed: day.wind_speed,
//         clouds: day.clouds,
//     };

//     if (index === 0) {forecast.day = 'Today'};
//     if (index === 1) {forecast.day = 'Tomorrow'};
//     if (index === 2) {forecast.day = 'Day after tomorrow'};
//     if (index === 3) {forecast.day = 'Day after the day after tomorrow'};
//     if (index === 4) {forecast.day = '4 days from now'};
//     if (index === 5) {forecast.day = '5 days from now'};
//     if (index === 6) {forecast.day = '6 days from now'};
//     if (index === 7) {forecast.day = '7 days from now'}
    
//     // forecast.day.setAttribute("class", "forecast-day");
    
//     let weatherCard = document.createElement("div");
//     weatherCard.setAttribute("id", `day-${index}`);
//     weatherCard.className = "weather-card"

//     let weatherIcon = document.createElement("img");
//     weatherCard.appendChild(weatherIcon);
//     fiveDayForecast.appendChild(weatherCard);

//     Object.entries(forecast).forEach( ([key, value]) => {
//         let entry 
//         if (key === "icon") {
//             entry = document.createElement("img");
//             entry.setAttribute("id", `day-${index}-${key}`)
//             entry.setAttribute("src", "http://openweathermap.org/img/wn/" + value + ".png")
//         } else {
//             entry = document.createElement("div");
//             entry.setAttribute("id", `day-${index}-${key}`);
//             if (key === "day") {entry.setAttribute("class", "forecast-day")};
//             if (typeof value === "number") {value = parseFloat(value.toFixed(1)).toString() + " " + unitDisplay};
//             entry.innerHTML = key + ": " + value;    
//         }
//         weatherCard.appendChild(entry);
//     })

   
// })

// // Display current weather
// displayName.innerHTML = name;
// displayIcon.setAttribute('src', `https://openweathermap.org/img/wn/${currentIcon}@2x.png`);
// displayTemperature.innerHTML = `Current Temperature: ${parseFloat(currentTemp.toFixed(1))} ${unitDisplay}`;
// displayFeelsLike.innerHTML = `Feels like: ${parseFloat(currentFeelsLike.toFixed(1))} ${unitDisplay}`;
// displayTempMax.innerHTML = `High: ${parseFloat(currentTempMax.toFixed(1))} ${unitDisplay}`;
// displayTempMin.innerHTML = `Low: ${parseFloat(currentTempMin.toFixed(1))} ${unitDisplay}`;
// displayDescription.innerHTML = `Clouds: ${currentDescription}`;
// // displaySunrise.innerHTML = `Sunrise: ${currentSunrise}`;
// // displaySunset.innerHTML = `Sunset: ${currentSunset}`;
// displayWindSpeed.innerHTML = `Wind speed: ${parseFloat(currentWindSpeed.toFixed(1))} ${unitDisplay}`;
// displayWindDirection.innerHTML = `Wind direction: ${currentWindDirection}`;
// displayHumidity.innerHTML = `Humidity: ${currentHumidity}`;
// displayPressure.innerHTML = `Pressure: ${currentPressure}`;

// // Add new city to recent history
// const searchedCitiesList = Array.from(searchHistory.querySelectorAll("li.searched-city"));
// const searchedCitiesIds = searchedCitiesList.map( city => city.getAttribute("id"));

// if (!searchedCitiesIds.includes(name)) {
//     let searchedCity = document.createElement("li");
//     searchedCity.setAttribute("class", "searched-city");
//     searchedCity.setAttribute("id", name);
//     searchedCity.innerHTML = name;
//     searchHistory.appendChild(searchedCity);
// };