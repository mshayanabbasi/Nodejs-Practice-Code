require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndRemove('5dcc420daf7bec1a49975957').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})