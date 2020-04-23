const express = require('express');
const routes = express.Router();
const multer = require('./multer');
const UserController = require('./controllers/UserController');
const ProductController = require('./controllers/ProductController');
const FilterController = require('./controllers/FilterController');

// Usuarios
routes.get('/cadastro', (req,res) => {
    res.render('register');
});
routes.post('/cadastro', multer.single('image'), UserController.create);
routes.get('/usuarios', UserController.index);
routes.delete('/usuario/:id', UserController.delete);
routes.put('/usuario/:id', UserController.update);

// Produtos
routes.post('/produtos/:id', multer.single('image'), ProductController.create);
routes.get('/produtos/:id', ProductController.index);
routes.delete('/produtos/:id', ProductController.delete);

// Pesquisas
routes.get('/produtos/:id/:name', FilterController.index);

module.exports = routes;