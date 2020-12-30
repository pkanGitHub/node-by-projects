const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

// server (emit) -> client (receive) - message
// client (emit) -> server (receive) - sendMessage

io.on('connection', (socket) => {
    console.log('New WebSocket connection')

    socket.emit('message', 'Welcome!')
    socket.on('sendMessage', (msg) => {
        io.emit('message', msg)
    })
})

server.listen(port, () => {
    console.log(`server is up on port ${port}`)
})