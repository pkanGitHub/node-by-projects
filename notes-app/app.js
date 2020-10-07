//const validator = require('validator')
const chalk = require('chalk')
const getNotes = require('./notes.js')

const command = process.argv[2]
// console.log(process.argv)

if (command === 'add') {
    console.log('Adding note!')
} else if (command === 'remove') {
    console.log('Removing note')
}

// const msg = getNotes()
// console.log(msg)

// console.log(chalk.bold.green('Success'))
//console.log(validator.isEmail('example.com')) // isURL
