const express = require('express')
const bannerController = require('../controllers/banner.controllers')

const router = express.Router()

router.get('/', bannerController.read)

module.exports = router