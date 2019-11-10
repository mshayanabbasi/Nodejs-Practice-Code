// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = "task-app"

// const id = new ObjectID()
// console.log(id.id.length)
// console.log(id.toHexString().length)
// console.log(id.getTimestamp())
// console.log(id.toHexString())
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        console.log('Unable to connect to database!')
    }
    const db = client.db(databaseName)
    // db.collection('users').findOne({ _id: new ObjectID("5dc6d7e317147f01af3b993e") }, (error, user) => {
    //     if (error) {
    //         console.log('Unable to find')
    //     }
    //     console.log(user)
    // })
    // db.collection('users').find({ age: 21 }).toArray((error, users) => {
    //     console.log(users)
    // })
    // db.collection('users').find({ age: 21 }).count((error, users) => {
    //     console.log(users)
    // })
    // db.collection('tasks').findOne({ _id: new ObjectID("5dc6d93f1ecb0c04348f43d0")}, (error, task) => {
    //     console.log(task)
    // })
    // db.collection('tasks').find({ completed: false }).toArray((error, task) => {
    //     console.log(task)
    // })
    // db.collection('tasks').find({ completed: false }).count((error, task) => {
    //     console.log(task)
    // })
    // db.collection('users').insertOne({
    //     _id: id,
    //     name: "Faris",
    //     age: 20
    // })
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the Module',
    //         completed: true
    //     },
    //     {
    //         description: 'Renew Inspection',
    //         completed: false
    //     },
    //     {
    //         description: 'Pots Plants',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         console.log('Unable to insert tasks!')
    //     }
    //     console.log(result.ops)
    // })
})