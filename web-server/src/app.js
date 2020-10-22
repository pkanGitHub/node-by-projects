const path = require('path')
const express = require('express')

const app = express()

app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, '../public')))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Sora'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Sora'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help page',
        description: 'Whatever you need help with'
    })
})
app.get('/weather', (req, res) => {
    res.send('Hello from weather page!')
})

app.listen(3000, () => {
    console.log('Server started')
})
