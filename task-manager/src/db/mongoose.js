const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useCreateIndex: true,
    useNewUrlParser: true
})
const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const task = new Task({
    description: 'Clean the house',
    completed: true
})

task.save().then(() => {
    console.log(task)
}).catch(() => {
    console.log('Error', error)
})