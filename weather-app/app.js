const request = require('request')

const url = 'https://api.darksky.net/forecast/c15cf4c4c698059337efb0ec13a1df4b/37.8267,-122.4233'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})