export default async function getCoordinates (geocodingAPI) {
    if (geocodingAPI.includes('zip')) {

        const response = await fetch(geocodingAPI);
        
        if (!response.ok) {
            throw new Error('Network response was not ok. Could not get coordinates.');
        } else {
            const data = await response.json();
            const result = {};
                result.lat = data.lat;
                result.lon = data.lon;
                result.name = data.name;
                console.log(result);
            return result;
        }
    } else {
        const response = await fetch(geocodingAPI);
        
        if (!response.ok) {
            throw new Error('Network response was not ok. Could not get coordinates.');
        } else {
            const data = await response.json();
            if (data && data.length > 0) {
                const result = {};
                    result.lat = data[0].lat;
                    result.lon = data[0].lon;
                    result.name = data[0].name;
                    console.log(result);
                return result;
            }
        }
    }
}