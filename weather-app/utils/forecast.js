const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/c15cf4c4c698059337efb0ec13a1df4b/'+ latitude + ','+ longitude
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services', undefined)
        }
        else if (body.error) {
            callback('Unable to find location!', undefined)
        }
        else {
            callback(undefined, body.daily.data[0].summary +' It is currently '+ body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast