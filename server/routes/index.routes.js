const express = require('express')
const router = express.Router()
module.exports = router
router.use('/api/v1/messages', require('./message.routes'))