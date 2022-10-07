const express = require('express')
const teamsController = require('../controllers/teams.controllers')

const router = express.Router()

router.get('/', teamsController.read)

module.exports = router