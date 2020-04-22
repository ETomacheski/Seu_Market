const path = require('path')
const express = require('express');
const routes = express.Router();
const multer = require('./multer');
const UserController = require('./controllers/UserController');
const ProductController = require('./controllers/ProductController');

routes.get('/cadastro', (req,res) => {
    res.render('register');
});

routes.post('/cadastro', multer.single('image'), UserController.create);
routes.get('/usuarios', UserController.index);
routes.delete('/usuarios/:id', UserController.delete);


routes.post('/produtos/:id', multer.single('image'), ProductController.create);
routes.get('/produtos/:id', multer.single('image'), ProductController.index);


module.exports = routes;