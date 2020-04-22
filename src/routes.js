const path = require('path')
const express = require('express');
const routes = express.Router();
const multer = require('./multer');
const UserModel = require('./models/User');

routes.get('/cadastro', (req,res) => {
    res.render('register');
});

routes.post('/cadastro', multer.single('image'), (req, res) => {
    const { name, email, delivery_time, city } = req.body;
    console.log(name);
    const image = req.file.path;
    console.log(image);
    // UserModel.create()
});

module.exports = routes;