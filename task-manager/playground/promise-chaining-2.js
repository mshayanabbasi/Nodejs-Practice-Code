require('../src/db/mongoose')
const Task = require('../src/models/task')


Task.findByIdAndRemove('5df64fb48149df240754bed1').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed:true })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})

const deleteTaskAndCount = async(id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5df64fb48149df240754bed1').then((result) => {
    console.log(result)
}).catch(e => {
    console.log(e)
})