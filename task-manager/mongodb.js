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

    // find one person data

    // db.collection('users').findOne({ _id: new ObjectID("5df3ade5ac7082673e181cad")}, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })

    // find many with 21 age users

    // db.collection('users').find({ age: 21 }).toArray((error, result) => {
    //     console.log(result)
    // })

    // find count user age 21 year

    // db.collection('users').find({ age: 21 }).count((error, result) => {
    //     console.log(result)
    // })

    // find task by its id

    // db.collection('tasks').findOne({ _id: new ObjectID('5df3b0067451fe6d454b2bd8') }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(result)
    // })

    // find many task by completed 

    // db.collection('tasks').find({ completed: false }).toArray((error, result) => {
    //     console.log(result)
    // })

    // update user document with async promise

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5df3af24f6ee1d6a5033be15")
    // },{
    //     $set:{
    //         name: 'Mike'
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // update age increment by 1

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5df3af24f6ee1d6a5033be15")
    // },{
    //   $inc: {
    //       age: 1
    //   }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // update Many tasks are completed true

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // delete Many document check with age 27

    // db.collection('users').deleteMany({
    //     age: 21
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // delete One document check 

    db.collection('tasks').deleteOne({
        description: "Clean the house"
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    // Insert One person Data

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
    
    // Insert Many person data
    
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
    
    // Task many insert data
    
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