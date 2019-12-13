// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')
// const MongoClient = mongodb.MongoClient

const id = new ObjectID()
//this line is id converted into Buffer data  console.log(id.id)
// console.log(id.getTimestamp())
// console.log(id.id.length)
// console.log(id.toHexString().length)



const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "task-manager"

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        console.log('Unable to connect to database!')
    }
    const db = client.db(databaseName)
    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Vikram',
    //     age: 26
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user!')
    //     }
    //     console.log(result.ops)
    // })
    // db.collection('users').insertMany([
    //     {
    //         name: 'Faris',
    //         age: 21
    //     },
    //     {
    //         name: 'Shayan',
    //         age: 28
    //     },
    //     {
    //         name: 'Ashar',
    //         age: 21
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert data!')
    //     }
    //     console.log(result.ops)
    // })
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },
    //     {
    //         description: 'Renew inspection',
    //         completed: false
    //     },
    //     {
    //         description: 'Pot plants',
    //         completed: false
    //     }
    // ],(error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert data!')
    //     }
    //     console.log(result.ops)
    // })
})