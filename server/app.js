require("dotenv").config()
const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const postsRoute = require('./routes/posts.routes')
const uploadRoute = require('./routes/upload.routes')
const bannerRoute = require('./routes/banner.routes')
const teamsRoute = require('./routes/teams.routes')

app.use(cors())

app.use(bodyParser.json())

app.use('/posts', postsRoute)

app.use('/uploads', uploadRoute)

app.use('/uploads', express.static('uploads'))

app.use('/banner', bannerRoute)

app.use('/teams', teamsRoute)

app.listen(3333, function () {
  console.log('Server running on PORT 3333')
})
