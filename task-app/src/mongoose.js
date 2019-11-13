const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/task-app-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

// const User = mongoose.model('User', {
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// })

// const me = new User({
//     name: 'Shayan',
//     age: 21
// })

// me.save().then(() => {
//     console.log(me)
// }).catch(error => {
//     console.log('Error', error)
// })

const Task = mongoose.model('Tasks', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})
const task = new Task({
    description: 'Renew Inspection',
    completed: false
})
task.save().then(() => {
    console.log(task)
}).catch(error => {
    console.log('Error', error)
})