const conn = require('../config/db')

const upload = (req, res) => {
  if(req.file.filename){
    conn.query("INSERT INTO posts (thumbnail) VALUES(?)", [req.file.path],
    (err, result) => {
      if (err) {
        console.log(err);
      }
    })
    res.status(201).json({
      mesaage: "Image upload successfully",
      url: req.file.filename
    })
  }else{
    res.status(500).json({
      mesaage: "Someting went wrong!"
    })
  }
}
  module.exports = {
    upload: upload
  }