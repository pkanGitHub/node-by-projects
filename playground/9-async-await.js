const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('Numbers must be non-negative')
            }
            resolve(a + b)
        }, 2000)
    })
}

const doWork = async () => {
    // async function always return Promise
    // if without return >> Promise { undefined }
    // if return 'Phyllis' >> Promise { 'Phyllis' }

    const sum = await add(1, 99) // wait 2 s
    const sum2 = await add(sum, 50) // wait 2 s
    const sum3 = await add(sum2, 3) // wait 2 s then print result 153
    // const sum3 = await add(sum2, -3) // after 6 s 'Error Numbers must be non-negative'
    return sum3

}

doWork().then((result) => {
    console.log('result', result)
}).catch((e) => {
    console.log('Error', e)
})