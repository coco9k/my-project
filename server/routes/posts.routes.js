const express = require('express')
const postsController = require('../controllers/posts.controllers')

const router = express.Router()

router.get('/', postsController.show)

router.post('/', postsController.create)

router.get('/:postsId', postsController.read)

router.get('/category/:categoryName', postsController.category)

module.exports = router