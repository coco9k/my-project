var express = require('express')
var cors = require('cors')
var app = express()
var multer = require('multer')

app.use(cors())
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'poolpy.local.com',
  user: 'root',
  password: '',
  database: 'arc_db'
});

connection.connect();

app.get('/news', function (req, res, next) {
  connection.query('SELECT * FROM news', function (error, results, fields) {
    if (error) throw error;
    res.json(results)
  });
})

app.get('/listpost', function (req, res, next) {
  connection.query('SELECT * FROM news', function (error, results, fields) {
    if (error) throw error;
    res.json(results)
  });
})

app.post('/createpost', function (req, res, next) {
  const title = req.body.title;
  const thumbnail = req.body.thumbnail;
  const tag = req.body.tag;
  const category = req.body.category;

  connection.query("INSERT INTO news (title, thumbnail, tag, category) VALUES(?,?,?,?)", [title, thumbnail, tag, category],
    (err, result) => {
      if (err) {
        console.log(err);
      }
    })
})

app.get('/news/category/:categoryName', function (req, res, next) {
  connection.query(`SELECT * FROM news WHERE category = "${req.params.categoryName}" ORDER BY date DESC LIMIT 6`, function (error, results, fields) {
    if (error) throw error;
    res.json(results)
  });
})

app.get('/news/:newsId', function (req, res, next) {
  connection.query(`SELECT * FROM news WHERE id = "${req.params.newsId}"`, function (error, results, fields) {
    if (error) throw error;
    res.json(results)
  });
})

app.get('/banner', function (req, res, next) {
  connection.query('SELECT * FROM banner ORDER BY date DESC LIMIT 3', function (error, results, fields) {
    if (error) throw error;
    res.json(results)
  });
})

app.get('/videos', function (req, res, next) {
  connection.query('SELECT * FROM videos', function (error, results, fields) {
    if (error) throw error;
    res.json(results)
  });
})

app.get('/teams', function (req, res, next) {
  connection.query('SELECT * FROM teams', function (error, results, fields) {
    if (error) throw error;
    res.json(results)
  });
})

app.listen(3333, function () {
  console.log('CORS-enabled web server listening on port 3333')
})