const path = require('path')
const express = require('express')

const app = express()

app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, '../public')))


app.get('/weather', (req, res) => {
    res.send('Hello from weather page!')
})

app.listen(3000, () => {
    console.log('Server started')
})
