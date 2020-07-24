const express = require('express')
const router = express.Router()
const management = require('./management.js')
router.use('/management', management)
module.exports = router
