const express = require('express')
const router = express.Router()
const generatorController = require('../controllers/generation')
const { authenticateToken } = require('../utils/auth')


router.get('/generate-paper', authenticateToken, generatorController.serveQP)

module.exports = router