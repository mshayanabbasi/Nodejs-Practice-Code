require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5ddff3845dea10758d26de00', { age: 19 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 19 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeandCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeandCount('5ddff3845dea10758d26de00', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})