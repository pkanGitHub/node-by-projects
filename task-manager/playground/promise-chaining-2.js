require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5fb4aa5fb713caa272f2976c').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})