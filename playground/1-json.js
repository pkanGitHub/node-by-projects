const fs = require('fs')

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const parseData = JSON.parse(bookJSON)
// console.log(parseData.author)

const dataBuffer = fs.readFileSync('1-json.json') // what comes back isnt a string
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

console.log(data.title)