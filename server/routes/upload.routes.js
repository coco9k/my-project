const express = require('express')
const postsController = require('../controllers/posts.controllers')
const uploadMiddleware = require('../middleware/upload.middleware')

const router = express.Router()

router.post('/', uploadMiddleware.upload.single('uploads'), postsController.create)

module.exports = router