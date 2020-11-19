require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5fb596e59aa99caa8820e7fb', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age: age }) // or {age}
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5fb596e59aa99caa8820e7fb', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})

