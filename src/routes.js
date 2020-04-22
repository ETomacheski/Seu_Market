const path = require('path')
const express = require('express');
const routes = express.Router();

const multer  = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
    }
});

const upload = multer({ storage: storage });

routes.get('/cadastro', (req,res) => {
    res.render('register');
});

routes.post('/cadastro', upload.single('image'), (req, res) => {
    console.log(req.body);
    console.log(req.file.path);
});

module.exports = routes;