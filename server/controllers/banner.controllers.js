const conn = require('../config/db')

const read = (req, res) => {
    conn.query('SELECT * FROM banner ORDER BY date DESC LIMIT 3', function (error, results, fields) {
        if (error) throw error;
        res.json(results)
      });
}
  module.exports = {
    read: read
  }