const express = require('express')
const router = express.Router()
const managementController = require('../controllers/managementController')

router.get('/list', managementController.index)

module.exports = router
