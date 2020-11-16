const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useUnifiedTopology: true, useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    // db.collection('users').insertOne({
    //     name: 'Phyllis',
    //     age: 27
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     }, {
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert document')
    //     }

    //     console.log(result.ops)
    // })

    // create
    db.collection('tasks').insertMany([
        {
            description: 'Get groceries',
            completed: true
        }, {
            description: 'Get a haircut',
            completed: true
        }, {
            description: 'Make an app',
            completed: false
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert document')
        }

        console.log(result.ops)
    })
})