const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c27520457bc019e0fe6ad9870dcaf22c&query=' + latitude + ',' + longitude
    //const url = 'http://api.weatherstack.com/current?access_key=c27520457bc019e0fe6ad9870dcaf22c&query=37.8267,-122.4233&units=f' // for fahrenheit 


    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (response.body.error) {
            callback('Unable to find the location.', undefined)
        } else {
            callback(undefined,
                response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degree out. It feels like ' + response.body.current.feelslike + ' degree out.'
            )
        }
    })
}

module.exports = forecast 