const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
      cb(null, './uploads')
    },
    filename: function(req, file, cb){
      cb(null, file.originalname)
    }
  })

  const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
      cb(null, true)
    }else{
      cb(new Error('Unsuppored files'), false)
    }
  }

  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1920*1080*10
    },
    fileFilter:fileFilter
  })

  module.exports = {
    upload: upload
  }