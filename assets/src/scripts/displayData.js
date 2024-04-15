export default async function displayData (data, unit) {
    if (!data) {
        throw new Error('Could not read data.');
    } else {
        // Sets background image to HD photo from Unsplash
        document.getElementById('main').style.backgroundImage = `url(${data.imgData.imgUrl})`;
        const footer = document.getElementById('footer');
        const photoCredit = document.createElement('p')
            photoCredit.innerHTML = 'Photo by ' + data.imgData.username + ' on Unsplash';
        const hyperlink = document.createElement('a')
            hyperlink.classList.add('unsplash-link');
            console.log(hyperlink);    
            hyperlink.href = data.imgData.imgUrl;
        const unsplashLink = document.createElement('p')
            unsplashLink.classList.add('unsplash-link');
            unsplashLink.innerHTML = `Click on or hover over for unsplash link`;

            //Still need to add hyperlink to the footer
        footer.appendChild(photoCredit);




        // Grabs display elements
        const currentName = document.getElementById('current-name');
        const currentIcon = document.getElementById('current-icon');
        const currentDescription = document.getElementById('current-description');
        const currentTemperature = document.getElementById('current-temperature'); 
        const currentFeelsLike = document.getElementById('current-feels-like');
        const currentHumidity = document.getElementById('current-humidity');
        const currentPressure = document.getElementById('current-pressure');
        const currentWindSpeed = document.getElementById('current-wind-speed');
        const currentWindDirection = document.getElementById('current-wind-direction');
        const currentSunrise = document.getElementById('current-sunrise');
        const currentSunset = document.getElementById('current-sunset');

        // Displays current weather data
        console.log("Displayed data: ", data)
        currentName.innerHTML = 'Location: ' + data.current.name;
        currentIcon.src = `https://openweathermap.org/img/wn/${data.current.icon}@2x.png`; 
        currentDescription.innerHTML = 'Description: ' + data.current.description;
        currentTemperature.innerHTML = 'Temperature: ' + data.current.temperature + unit;
        currentFeelsLike.innerHTML = 'Feels like: ' + data.current.feelsLike + unit;
        currentHumidity.innerHTML = 'Humidity: ' + data.current.humidity + '%';
        currentPressure.innerHTML = 'Pressure: ' + data.current.pressure + 'hPa';
        currentWindSpeed.innerHTML = 'Wind Speed: ' + data.current.windSpeed + 'm/s';
        currentWindDirection.innerHTML = 'Wind Direction: ' + data.current.windDirection + '°';
        // currentSunrise.innerHTML = 'Sunrise: ' + data.current.sunrise;
        // currentSunset.innerHTML = 'Sunrise: ' + data.current.sunset;
        
        console.log("displaying predictions!");
        Object.values(data.daily).forEach((value, index) => {
            // console.log(value, index);
            const day = index + 1;
            const dayDisplay = document.getElementById(`day-${day}-day`);
            const iconDisplay = document.getElementById(`day-${day}-icon`);
            const summaryDisplay = document.getElementById(`day-${day}-summary`);
            const tempMorningDisplay = document.getElementById(`day-${day}-temp-morning`);
            const tempMinDisplay = document.getElementById(`day-${day}-temp-min`);
            // const tempDayDisplay = document.getElementById(`day-1-temp-day`);
            const tempDayDisplay = document.getElementById(`day-${day}-temp-day`);
            const tempMaxDisplay = document.getElementById(`day-${day}-temp-max`);
            const tempEveningDisplay = document.getElementById(`day-${day}-temp-eve`);
            const tempNightDisplay = document.getElementById(`day-${day}-temp-night`);
            const tempFeelsLikeDisplay = document.getElementById(`day-${day}-temp-feels-like`);
            const humidityDisplay = document.getElementById(`day-${day}-humidity`);
            const pressureDisplay = document.getElementById(`day-${day}-pressure`);
            const windSpeedDisplay = document.getElementById(`day-${day}-wind-speed`);
            const windDirectionDisplay = document.getElementById(`day-${day}-wind-direction`);
            // const sunriseDisplay = document.getElementById(`day-${day}-sunrise`);
            // const sunsetDisplay = document.getElementById(`day-${day}-sunset`);
            
            dayDisplay.innerHTML = value.day;
            iconDisplay.setAttribute('src', `https://openweathermap.org/img/wn/${value.icon}.png`);
            summaryDisplay.innerHTML = value.summary;
            tempMorningDisplay.innerHTML = 'Morning: ' + value.tempMorn + unit;
            tempMinDisplay.innerHTML = 'Min: ' + value.tempMin + unit;
            tempDayDisplay.innerHTML = 'Day: ' + value.tempDay + unit;
            tempMaxDisplay.innerHTML = 'Max: ' + value.tempMax + unit;
            tempEveningDisplay.innerHTML = 'Evening: ' + value.tempEve + unit;
            tempNightDisplay.innerHTML = 'Night: ' + value.tempNight + unit;
            tempFeelsLikeDisplay.innerHTML = 'Feels like: ' + value.feelsLike + unit;
            humidityDisplay.innerHTML = 'Humidity: ' + value.humidity + '%';
            pressureDisplay.innerHTML = 'Pressure: ' + value.pressure + 'hPa';
            
            // iterate through res to display each day's data
        });
    }
}