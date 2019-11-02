const https = require('https')
const url = 'https://api.darksky.net/forecast/c15cf4c4c698059337efb0ec13a1df4b/40,-75'

const request = https.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})
request.on('error', (error) => {
    console.log('Error', error)
})
request.end()