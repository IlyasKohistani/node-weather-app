const request = require('request');
const moment = require('moment');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=ea1a416fe29c7ae575d5c32795490ecd&query=${longitude},${latitude}`;
    request({ url, json: true }, (error, { body } = {}) => {
        if (error)
            callback({ error: 'Unable to connect to weather services!' }, undefined);
        else if (body.error)
            callback({ error: 'Unable to find the location! Please try again.' }, undefined)
        else {
            const addressDate = moment(body.location.localtime);
            callback(undefined, {
                location: body.location.region,
                country: body.location.country,
                temperature: body.current.temperature,
                feelslike: body.current.feelslike,
                precip: body.current.precip,
                description: body.current.weather_descriptions.join(', '),
                wind: body.current.wind_speed,
                humidity: body.current.humidity,
                date: addressDate.format("D MMM yyyy"),
                day: addressDate.format("dddd"),
                time: body.current.observation_time,
                icon: body.current.weather_icons[0],
                pressure: body.current.pressure,
                cloudcover: body.current.cloudcover,
                visibility: body.current.visibility
            });
        }
    })
}

module.exports = forecast;