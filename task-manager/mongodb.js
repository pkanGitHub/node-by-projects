// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb') // destructure way

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)

MongoClient.connect(connectionURL, { useUnifiedTopology: true, useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    db.collection('tasks').findOne({ _id: new ObjectID("5fb30c37438e9496d7234552") }, (error, task) => {
        if (error) {
            return console.log('Unable to fetch')
        }

        console.log(task)
    })

    db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
        console.log(tasks)
    })


    // <create>
    // insertOne
    // insertMany
    // result.ops
    // <read>
    // findOne
    // find (for multiple).toArray
})