const express = require('express');
const routes = express.Router();
const multer = require('./multer');
const UserController = require('./controllers/UsersController');
const ProductController = require('./controllers/ProductsController');
const FilterController = require('./controllers/FiltersController');

routes.get('/usuarios', UserController.index);

// Cadastro de Usuarios
routes.get('/cadastro', (req,res) => {
    res.render('register');
});
routes.post('/cadastro', multer.single('image'), UserController.create);

// Get de Usuario unico
routes.get('/usuario/:id', UserController.uniqueUser);

// Update e delete.
routes.delete('/usuario/:id', UserController.delete);
routes.put('/usuario/:id', UserController.update);

// Produtos
routes.get('/produtos/:id', ProductController.index);
routes.post('/produtos/:id', multer.single('image'), ProductController.create);
routes.delete('/produtos/:id', ProductController.delete);

// Pesquisas
routes.get('/produtos/:id/:name', FilterController.index);

module.exports = routes;