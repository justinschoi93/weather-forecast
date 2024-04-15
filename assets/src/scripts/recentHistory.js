import checkWeather from './checkWeather.js';
import parseData from './parseData.js';
import displayData from './displayData.js';
import unsplash from './unsplash.js';

export default function updateRecentHistory(result) {

    const recentSearches = document.getElementById('recent-searches');
    const recentSearchesList = recentSearches.getElementsByTagName('li');
    const recentSearchesArray = Array.from(recentSearchesList);
    const recentSearchesTextArray = recentSearchesArray.map( city => city.innerText);
    const systemOfMeasurement = document.getElementById('unit-select').value;
    console.log(recentSearchesTextArray);

    if (!recentSearchesTextArray.includes(result.name)) {
        console.log(recentSearchesTextArray, result.name);
        const newCity = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.innerText = result.name;
        anchor.href = "#";
        anchor.addEventListener('click', async (event) => {
            event.preventDefault();
            const data = await checkWeather(result, systemOfMeasurement);
            const weatherData = await parseData(data);
            const imgData = await unsplash(weatherData.current.description, result.name);
            weatherData.imgData = imgData;
    
            // console.log(imgData.results[Math.floor(Math.random() * 10)].slug);
            // weatherData.imgUrl = imgUrl;
            displayData(weatherData, systemOfMeasurement);
        }); 
        newCity.appendChild(anchor);
        recentSearches.appendChild(newCity);
    }
}