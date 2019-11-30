require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('5ddff3845dea10758d26de00', { age: 19 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 19 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})