const request = require('request');


const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibS1pbHlhcy1rb2hpc3RhbmkiLCJhIjoiY2t5MDFtenh4MmZmODJ2bzVsbmN6eGpkaSJ9.thRDepIxS5DunQzFhELCdA&limit=1`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback({ error: 'Unable to connect to location services!' }, undefined);
        } else if (body.features.length === 0) {
            callback({ error: 'Unable to find a location. Try another search.' }, undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            });
        }
    })
}

module.exports = geocode;