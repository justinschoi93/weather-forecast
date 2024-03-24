export default function getCoordinates (geocodingAPI) {

    console.log(geocodingAPI)

    if (geocodingAPI.includes('zip')) {4
        fetch(geocodingAPI)
            .then( response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok. Could not get coordinates.');
                }
                return response.json();
            })
            .then( data => {
                console.log(data)
                let lat = data.lat;
                let lon = data.lon;
                let name = data.name;
                
                checkWeather(lat, lon, name);
            })
    } else {
        fetch(geocodingAPI)
            .then( response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok. Could not get coordinates.');
                }
                return response.json();
            })
            .then( data => {
                if (data && data.length > 0) {
                    let lat = data[0].lat;
                    let lon = data[0].lon;
                    let name = data[0].name;
                    checkWeather(lat, lon, name);
                }
            })
    }
}