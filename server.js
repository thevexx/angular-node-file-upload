const express = require('express')
const process = require('process')
const multer = require('multer')
const fs = require('fs')
const port = process.env.port | 3000;

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1])
  }
})

const upload = multer({ storage: storage })

app.get('/file/:filename', (req, res) => {
  res.sendFile(process.cwd() + '/uploads/' + req.params.filename)
})

app.get('/allFiles', (req, res) => {
  let dir = fs.readdirSync(process.cwd() + '/uploads/')
  res.send(dir)
})

app.post('/upload', upload.single('file'), (req, res) => {
  res.send({ msg: 'file received' })
})

app.listen(port, () => {
  console.log('server is listening on port 3000');
})
