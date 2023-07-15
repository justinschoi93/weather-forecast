var cityData = [];
var forecastWindow = $('.forecast-window');

//searchHistory window
////assigned event listener, will search city upon click. 
var searchHistory = $('.search-history');
searchHistory.on('click', function(event){
    var cityName = event.target.innerText;

    getCoordinates(cityName);
    
});

//the search bar & submit button
var searchBarEl = $('.search-bar');
var searchBtn = $('.search-button');

//UPON CLICK, the search button will...
////get the coordinates of the city
////get 5 days worth of weather data for that city. 
////store weather data for that city in cityData
////diplay weather data
searchBtn.on('click', function (){

    var cityEl = searchBarEl.val();
    var newCityEl = document.createElement('li');
    
    newCityEl.textContent = cityEl;
    searchHistory.append(newCityEl);
    
    var cities = Object.keys(cityData);

    if (!cities.includes(cityEl)){
        cityData[cityEl] = {};
    }

    getCoordinates(cityEl);
    
})

//a function that uses an API to get the coordinates of a city by it's name. 
////adds lat and lon of city to cityData
//it also calls the checkWeather()
var cityData = [];

function getCoordinates (cityName){
    var cities = Object.keys(cityData);
    
    if (!cities.includes(cityName)){
        cityData[cityName] = {};
    }

    var requestURL = 'https://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&limit=&appid=0b2949d3ba17a6aec298126cb969f7dc';
    
    
    fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        cityData[cityName].lat = data[0].lat;
        cityData[cityName].lon = data[0].lon;

        checkWeather(cityName);
    })

    // console.log(cityData);

    localStorage.setItem(cityName, JSON.stringify(cityData[cityName]));
    
};


//a function that accepts the name of a city, and stores weather data in the cityData object.
//it also intiates the displayData() 
function checkWeather (cityName){
    var lat = cityData[cityName]['lat'];
    var lon = cityData[cityName]['lon'];

    // console.log(lat, lon);
    var cityWeatherData = [];

    var requestURL = 'https://api.openweathermap.org/data/2.5/forecast?lat='+ lat +'&lon='+ lon + '&units=metric&appid=0b2949d3ba17a6aec298126cb969f7dc';
    
    
    fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        for (let i = 0; i < 5; i++){
            

            var newObj = {'day': i};
            
            newObj['temp'] = data.list[i].main.temp;
            newObj['humidity'] = data.list[i].main.humidity;
            newObj['wind'] = data.list[i].wind.speed;
            console.log(data.list[i]);
            
            cityWeatherData.push(newObj);
        }; 
       cityData[cityName].weatherData = cityWeatherData;
       displayData(cityName)
       localStorage.setItem(cityName, JSON.stringify(cityData[cityName]));
       
    })
    
    

}
//a function that accepts the name of a city as a parameter, and displays weather information for that city in the forecast window. 
function displayData (cityName){
    var weatherData = cityData[cityName].weatherData
    $('.forecast-window').empty();
    


 for (let i = 0; i < weatherData.length; i++){
    
    // console.log(weatherData[i]);
    
    var dayCard = $('<div>').attr('class', 'day-' + i);;
    
    var dayNum = $('<div>').attr('class', 'num');
    if (i === 0){
        dayNum.text('Today');
    } else if (i === 1) {
        dayNum.text('Tomorrow')
    } else if (i === 2) {
        dayNum.text('The day after tomorrow')
    } else if (i === 3) {
        dayNum.text('The day after the day after tomorrow')
    } else if (i === 4) {
        dayNum.text('The day after the day after the day after tomorrow')
    };
    
    
    var dayTemp = $('<div>').attr('class', 'temp');
    dayTemp.text('temperature: ' + weatherData[i].temp + ' degrees Celcius');

    var dayHumidity = $('<div>').attr('class', 'humidity');
    dayHumidity.text('humidity: ' + weatherData[i].humidity);

    var dayWind = $('<div>').attr('class', 'wind');
    dayWind.text('wind: ' + weatherData[i].wind);

    dayCard.append(dayNum).append(dayTemp).append(dayHumidity).append(dayWind);
    forecastWindow.append(dayCard);
    
 }
 
}





function setCityDataLocalStorage(cityData){
    localStorage.setItem('cityData', JSON.stringify(cityData));
}

function getLocalStorage(){
    return JSON.parse(localStorage.getItem(cityData));
}

//once cityData is all up to date
//iterate through the appropriate cityData obj
//as you iterate, .createElement and .append into appropriate div by day
//