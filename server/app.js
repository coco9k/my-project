var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'poolpy.local.com',
  user     : 'root',
  password : '',
  database : 'arc_db'
});
 
connection.connect();

app.get('/news', function (req, res, next) {
  connection.query('SELECT * FROM news', function (error, results, fields) {
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
  connection.query('SELECT * FROM banner', function (error, results, fields) {
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