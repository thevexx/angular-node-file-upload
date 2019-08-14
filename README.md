
# Angular / Node.js file upload project

  

this project is done to show how to properly upload a file using angular and NodeJs
  
Tested on Angular 6/7/8

* [Install](#install)
* [Usage](#usage)

 
## Install
##### clone and install npm dependencies:

    npm install

##### Run the project with:
```
ng serve 
```
then
```
node server.js
```
## Usage
#### Node.js

In this project, we used a Multer as a Node.js module to receive the file, Multer integration in Node.js is the following : 

``` const multer = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1])
  }
})

const upload = multer({ storage: storage })
```

After that, its easier to integrate with any api call : 

```
app.post('/upload', upload.single('file'), (req, res) => {
  res.send({ msg: 'file received' })
})
```
#### Angular

The interesting part in angular is when we used the FormData class to send the file :

```
 const formData = new FormData();
 formData.append('file', this.selectedFile);
```

 

## Contribution

You can fork project from github. Pull requests are kindly accepted.
1. npm install
3. Run demo: ng serve / npm start
