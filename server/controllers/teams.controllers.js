const conn = require('../config/db')

const read = (req, res) => {
    conn.query('SELECT * FROM teams', function (error, results, fields) {
        if (error) throw error;
        res.json(results)
      });
}
  module.exports = {
    read: read
  }