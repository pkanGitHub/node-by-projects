const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback('This is my error!', undefined)
        callback(undefined, [1, 4, 7])
    }, 2000)
}

doWorkCallback((error, result) => {
    if (error) {
        return console.log(error)
    }
    console.log(result)
})


// setTimeout(() => {
//     console.log('simulated 2 second delay')
// }, 2000)

// const add = (num1, num2, callback) => {
//     setTimeout(() => {
//         const sum = num1 + num2

//         callback(sum)
//     }, 2000)
// }
// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })