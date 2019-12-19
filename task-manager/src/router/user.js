const express = require('express')
const auth = require('../middleware/auth')
const User = require('../models/user')
const router = new express.Router()



router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    }catch (e) {
        res.status(400).send(e)
    }
})

router.post('/users/login', async (req, res) => {
    try {
        // apply to all user collection in this line
        const user = await User.findByCredentials(req.body.email, req.body.password)
        // apply to indiviual user collection in this line
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (e) {
        res.status(400).send()
    }
})

router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            token.token !== req.token
        })
        await req.user.save()
        res.send({ message: 'Logout SuccessFully'})
    } catch (e) {
        res.status(500).send()
    }
})

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/users/me', auth, async (req, res) => {

    res.send(req.user)
})

router.get('/users/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findById(_id)
        if (!user) {
            return res.status(400).send()
        }
        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }

    // without async function

    // User.findById(_id).then((user) => {
    //     if (!user) {
    //         return res.status(400).send()
    //     }
    //     res.status(201).send(user)
    // }).catch((e) => {
    //     res.status(500).send()
    // })
})

router.patch('/users/:id', async (req, res) => {

    const updates = Object.keys(req.body)
    const allowUpdates = ['email', 'age', 'password', 'name']
    const isValidOperation = updates.every(update => allowUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {

        const user = await User.findById(req.params.id)
        updates.forEach((update) => user[update] = req.body[update])
        await user.save()
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if (!user) {
            return res.status(400).send()
        }
        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router