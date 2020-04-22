const path = require('path')
const express = require('express');
const routes = express.Router();
const multer = require('./multer');
const UserController = require('../config/controllers/UserController');

routes.get('/cadastro', (req,res) => {
    res.render('register');
});

routes.post('/cadastro', multer.single('image'), UserController.create);

module.exports = routes;