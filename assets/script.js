


var searchHistory = $('.search-history');
//when the return key is hit, the text content within the search bar will be added to the search history
//
var searchBarEl = $('.search-bar').on('keydown', function (event){
    if (event.key === 'Enter'){
        // console.log(event);
        // console.log(searchBarEl.val());
        var cityEl = $(searchBarEl).val();
        var newCityEl = document.createElement('li');
        newCityEl.textContent = cityEl;
        searchHistory.append(newCityEl);

        var coordinates = getCoordinates(cityEl);
        console.log(getCoordinates(cityEl));
        // console.log(coordinates);
        // checkWeather(coordinates[0], coordinates[1]);
    }
    
});


function getCoordinates (cityName){
    var requestURL = 'https://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&limit=&appid=0b2949d3ba17a6aec298126cb969f7dc';
    var result = [];
    
    fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        
        result = [data[0].lat, data[0].lon];
        // console.log(result);
        return result;
       

    })
};



function checkWeather (lat, lon){
    var requestURL = 'https://api.openweathermap.org/data/2.5/forecast?lat='+ lat +'&lon='+ lon + '&appid=0b2949d3ba17a6aec298126cb969f7dc';

    fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        //if city is not already a list item... 
        console.log(data);
    })
}

// getCoordinates('Tokyo');
// checkWeather(35.6828387, 139.7594549);
//1. get coordinates using geocoding API
//2. use cooridnates and weatherAPI to get weather data
//3. save and display weather data


//1. search bar input will be used to retrieve coordinates
//2. coordinates will be used to retrieve weather data
//3. weather data will be displayed