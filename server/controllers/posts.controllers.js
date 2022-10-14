const conn = require('../config/db')

const show = (req, res) => {
    conn.query('SELECT * FROM posts', function (error, results, fields) {
        if (error) throw error;
        res.json(results)
      })
}

const create = (req, res) => {
  const id = req.body.id
  const title = req.body.title
  const game = req.body.game
  const category = req.body.category
  const detail = req.body.detail
  const date = req.body.date
    conn.query("INSERT INTO posts (id, title, game, category, detail, thumbnail, date) VALUES(?,?,?,?,?,?,?)", [id, title, game, category, detail, req.file.path, date],
    (err, result) => {
      if (err) {
        console.log(err);
      }
    })
  }

const read = (req, res) => {
    conn.query(`SELECT * FROM posts WHERE id = "${req.params.postsId}"`, function (error, results, fields) {
        if (error) throw error
        res.json(results)
      })
}

const category = (req, res) => {
    conn.query(`SELECT * FROM posts WHERE category = "${req.params.categoryName}" ORDER BY date DESC LIMIT 6`, function (error, results, fields) {
        if (error) throw error
        res.json(results)
      })
}

  module.exports = {
    show: show,
    create: create,
    read: read,
    category: category
  }