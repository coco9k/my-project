const express = require('express')
const uploadController = require('../controllers/upload.controllers')
const uploadMiddleware = require('../middleware/upload.middleware')

const router = express.Router()

router.post('/', uploadMiddleware.upload.single('uploads'), uploadController.upload)

module.exports = router