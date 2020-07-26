const express = require('express')
const router = express.Router()
const payment = require('./payment.js')
router.use('/payment', payment)
module.exports = router
