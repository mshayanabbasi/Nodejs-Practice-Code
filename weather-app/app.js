const request = require('request')

// const url = 'https://api.darksky.net/forecast/c15cf4c4c698059337efb0ec13a1df4b/37.8267,-122.4233'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather services!')
//     }
//     else if (response.body.error) {
//         console.log('Unable to find location!')
//     }
//     else {
//         console.log(response.body.daily.data[0].summary +' It is currently '+ response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.' )
//     }
// })

const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibXNoYXlhbmFiYmFzaSIsImEiOiJjazI2OWM0bzcxbnBvM2ducjQ5OTdtdG9tIn0.dh3TOAUuXHaBVVknwIucXQ'

request({ url: geoCodeUrl, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather services!')
    }
    else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try another search')
    }
    else {
        const latitude = response.body.features[0].center[0]
        console.log(latitude)
        const longitude = response.body.features[0].center[1]
        console.log(longitude)
    }
})