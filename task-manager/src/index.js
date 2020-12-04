const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')


const app = express()
const port = process.env.PORT || 3000

const multer = require('multer')
const upload = multer({
    dest: 'images'
})

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
})

app.use(express.json()) //automatically parse incoming json to an object

app.use(userRouter)
app.use(taskRouter)

// Without middleware: new request comes in to server -> run route handler
//
// With middleware: new request comes in to server -> do something(customizable by developer) -> run route handler


app.listen(port, () => {
    console.log('Server is on port ' + port)
})