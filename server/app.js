require("dotenv").config()
var express = require('express')
var cors = require('cors')
var app = express()
var bodyParser = require('body-parser')
const conn = require("./config/db")

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const uploadRoute = require('./routes/upload.routes')

app.use('/upload', uploadRoute)
app.use('/uploads', express.static('uploads'))

app.get('/posts', function (req, res, next) {
  conn.query('SELECT * FROM posts', function (error, results, fields) {
    if (error) throw error;
    res.json(results)
  });
})

app.get('/listpost', function (req, res, next) {
  conn.query('SELECT * FROM posts', function (error, results, fields) {
    if (error) throw error;
    res.json(results)
  });
})

app.post('/createpost', function (req, res, next) {
  const title = req.body.title;
  const game = req.body.game;
  const category = req.body.category;
  const detail = req.body.detail;

  conn.query("INSERT INTO posts (title, game, category, detail) VALUES(?,?,?,?)", [title, game, category, detail],
    (err, result) => {
      if (err) {
        console.log(err);
      }
    })
})


app.get('/posts/category/:categoryName', function (req, res, next) {
  conn.query(`SELECT * FROM posts WHERE category = "${req.params.categoryName}" ORDER BY date DESC LIMIT 6`, function (error, results, fields) {
    if (error) throw error;
    res.json(results)
  });
})

app.get('/posts/:postsId', function (req, res, next) {
  conn.query(`SELECT * FROM posts WHERE id = "${req.params.postsId}"`, function (error, results, fields) {
    if (error) throw error;
    res.json(results)
  });
})

app.get('/banner', function (req, res, next) {
  conn.query('SELECT * FROM banner ORDER BY date DESC LIMIT 3', function (error, results, fields) {
    if (error) throw error;
    res.json(results)
  });
})

app.get('/teams', function (req, res, next) {
  conn.query('SELECT * FROM teams', function (error, results, fields) {
    if (error) throw error;
    res.json(results)
  });
})

app.listen(3333, function () {
  console.log('Server running on PORT 3333')
})
