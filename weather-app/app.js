const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=c27520457bc019e0fe6ad9870dcaf22c&query=37.8267,-122.4233'
//const url = 'http://api.weatherstack.com/current?access_key=c27520457bc019e0fe6ad9870dcaf22c&query=37.8267,-122.4233&units=f' // for fahrenheit 

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degree out. It feels like ' + response.body.current.feelslike + ' degree out.')
})