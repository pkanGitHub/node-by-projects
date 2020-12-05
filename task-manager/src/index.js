const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')


const app = express()
const port = process.env.PORT || 3000

const multer = require('multer')
const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000 //in B so 1m for MB
    },
    fileFilter(req, file, cb) {
        // if (!file.originalname.endsWith('.pdf')) {
        // return cb(new Error('Please upload a PDF'))
        // OR (below)
        if (!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('Please upload a Word Document'))
        }

        cb(undefined, true)
    }
})

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
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