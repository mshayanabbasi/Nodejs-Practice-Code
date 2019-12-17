const express = require('express')
const router = new express.Router()
const Task = require('../models/task')

router.post('/tasks', async (req, res) => {
    const task = new Task(req.body)

    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }

    // without async

    // task.save().then(() => {
    //     res.status(201).send(task)
    // }).catch((e) => {
    //     res.status(400).send(e)
    // })
})

router.get('/tasks', async (req, res) => {

    try {
        const tasks = await Task.find({})
        res.send(tasks)
    } catch (e) {
        res.status(400).send(e)
    }

    // without async

    // Task.find({}).then((tasks) => {
    //     res.status(201).send(tasks)
    // }).catch((e) => {
    //     res.status(400).send(e)
    // })
})

router.get('/tasks/:id', async(req, res) => {
    const _id = req.params.id
    
    try {
        const task = await Task.findById(_id)
        if (!task) {
            return res.status(400).send()
        }
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }

    // without async

    // Task.findById(_id).then((task) => {
    //     if (!task) {
    //         return res.status(400).send()
    //     }
    //     res.status(201).send(task)
    // }).catch((e) => {
    //     res.status(500).send(e)
    // })
})

router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowUpdates = ['description', 'completed']
    const isValidOperation = updates.every(update => allowUpdates.includes(update))
    if (!isValidOperation) {
        res.status(400).send({ error: 'Invalid updates!' })
    }
    try {

        const task = await Task.findById(req.params.id)
        updates.forEach((update) => task[update] = req.body[update])
        await task.save()

        // const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(400).send()
    }
})

router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if (!task) {
            res.status(400).send()
        }
        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})



module.exports = router