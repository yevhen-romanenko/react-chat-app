const express = require('express')
const router = express.Router()
const message = require('../models/message.model')
const m = require('../helpers/middlewares')
// Routes
module.exports = router

router.get('/', async (req, res) => {
    await message.getMessages()
    .then(messages => res.json(messages))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

router.get('/:id', m.mustBeInteger, async (req, res) => {
    const id = req.params.id
    await message.getMessage(id)
    .then(message => res.json(message))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

router.post('/', m.checkFieldsMessage, async (req, res) => {
    await message.insertMessage(req.body)
    .then(message => res.status(201).json({
        message: `The message #${message.id} has been created`,
        content: message
    }))
    .catch(err => res.status(500).json({ message: err.message }))
})

router.put('/:id', m.mustBeInteger, m.checkFieldsMessage, async (req, res) => {
    const id = req.params.id
    await message.updateMessage(id, req.body)
    .then(message => res.json({
        message: `The post #${id} has been updated`,
        content: message
    }))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        }
        res.status(500).json({ message: err.message })
    })
})

router.delete('/:id', m.mustBeInteger, async (req, res) => {
    const id = req.params.id
    
    await message.deleteMessage(id)
    .then(message => res.json({
        message: `The message #${id} has been deleted`
    }))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        }
        res.status(500).json({ message: err.message })
    })
})