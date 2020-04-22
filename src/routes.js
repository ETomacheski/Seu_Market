const path = require('path')
const express = require('express');
const routes = express.Router();
const multer = require('./multer');
const UserModel = require('./models/User');

routes.get('/cadastro', (req,res) => {
    res.render('register');
});

routes.post('/cadastro', multer.single('image'), (req, res) => {

    console.log(req.body);
    
    const { name, email, delivery_time, city, phone } = req.body;
    var image;
    
    if (req.file != null) {
        image = req.file.path;
    }

    // UserModel.create();
    
});

module.exports = routes;