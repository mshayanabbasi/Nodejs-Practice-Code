const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./router/user')
const taskRouter = require('./router/task')


const app = express()
const port = process.env.PORT || 5000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     }else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down, check back soon')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

//
// Without middleware: new request -> run route handler
//
// With middleware: new request -> do something -> run route handler
//


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// yai is sai command sai run hogi npm run dev


// const bcrypt = require('bcryptjs')

// const myFunction = async () => {
//     const password = 'Red12345!'
//     const hashPassword = await bcrypt.hash(password, 8)

//     console.log(password)
//     console.log(hashPassword)
//     // plain text password match with hashPassword return true
//     // const isMatch = await bcrypt.compare('Red12345!', hashPassword)
//     // plain text password not match with hashPassword return false
//     const isMatch = await bcrypt.compare('red12345!', hashPassword)
//     console.log(isMatch)
// }

const jwt = require('jsonwebtoken')


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJhYmMxMjMiLCJpYXQiOjE1NzY1MTA5NTB9.nbEji8UrKvqeVyGBTcCVNahAeDIV7tk3DGvR8WdKvcs
// base64 encoded json,                   payload or body,                            signature
const myFunction = async () => {
    const token = jwt.sign({_id: 'abc123'}, 'thisismynewcourse', { expiresIn: '7 days'})
    console.log(token)

    const data = jwt.verify(token, 'thisismynewcourse')
    console.log(data)
}

myFunction()