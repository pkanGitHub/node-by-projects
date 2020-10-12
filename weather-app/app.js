const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=c27520457bc019e0fe6ad9870dcaf22c&query=37.8267,-122.4233'
//const url = 'http://api.weatherstack.com/current?access_key=c27520457bc019e0fe6ad9870dcaf22c&query=37.8267,-122.4233&units=f' // for fahrenheit 

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service')
    } else if (response.body.error) {
        console.log('Unable to find the location')
    } else {
        console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degree out. It feels like ' + response.body.current.feelslike + ' degree out.')
    }
})

const geoUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicHlrOXE3IiwiYSI6ImNrZzZtZG45ajE1cXMycWwweWJxaDFiMGsifQ.JAmmY5ZfKak2OWTf1LELsA&limit=1"

request({ url: geoUrl, json: true }, (error, res) => {

    if (error) {
        console.log('Unable to connext to geocoding service')
    } else if (res.body.length === 0) {
        console.log('Unable to find the location. Try another search.')
    } else {
        const latitude = res.body.features[0].center[0]
        const longitude = res.body.features[0].center[1]
        console.log(latitude, longitude)
    }
})