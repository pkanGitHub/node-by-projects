require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5fb4aa5fb713caa272f2976c').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5fb597c7bb7b90aaec14ee92').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})