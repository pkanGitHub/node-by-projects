require('../src/db/mongoose')
const User = require('../src/models/user')

// "5fb4b102be3da2a4a0859302"

User.findByIdAndUpdate('5fb596e59aa99caa8820e7fb', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})


