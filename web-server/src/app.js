const path = require('path')
const express = require('express')
const hbs = require('hbs')// for partials

const app = express()

const viewsPath = path.join(__dirname, '../templates/views') //use this when your views folder isn't call views
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

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
        name: 'Sora',
        description: 'Whatever you need help with'
    })
})
app.get('/weather', (req, res) => {
    res.send('Hello from weather page!')
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404 Help',
        name: 'Sora',
        errorMessage: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    // should come up last because of how express handle order
    res.render('404', {
        title: '404',
        name: 'Sora',
        errorMessage: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log('Server started')
})
