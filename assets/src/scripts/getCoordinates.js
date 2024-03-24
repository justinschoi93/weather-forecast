export default async function getCoordinates (geocodingAPI) {
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
                    const result = {};
                        result.lat = data[0].lat;
                        result.lon = data[0].lon;
                        console.log(result);
                    return result;
                }
            })
    }
}