const express = require('express');
const routes = express.Router();
const multer = require('./multer');
const Auth = require('./config/auth');

// Controllers 
const UserController = require('./controllers/UsersController');
const ProductController = require('./controllers/ProductsController');
const FilterController = require('./controllers/FiltersController');
const SessionController = require('./controllers/SessionController');
const cartController = require('./controllers/cartController');

// ROUTES 

routes.get('/', (req, res) => {
    res.render('index');
});

// Carrinho
routes.get('/carrinho', cartController.listAll);
routes.post('/carrinho', cartController.listByCity);

routes.get('/contato', (req, res) => {
    res.render('contact');
});


// Usuário
routes.get('/usuarios', UserController.index);

routes.get('/cadastro', (req,res) => {
    res.render('register');
});

routes.post('/cadastro', multer.single('image'), UserController.create);

routes.delete('/usuario/:id', UserController.delete);
routes.put('/usuario/:id', UserController.update);


// Produtos
// EX de rota :http://localhost:3333/produtos?id=1
routes.get('/produtos/', ProductController.index);

routes.post('/produtos/:id', multer.single('image'), ProductController.create);
routes.delete('/produtos/:id', ProductController.delete);

// Pesquisas
// routes.get('/produtos/:id/:name', FilterController.index);


// Session
routes.get('/login', (req, res) => {
    res.render('login');
});

routes.post('/login', SessionController.store);


// Rotas autenticadas
// routes.use(Auth);

routes.get('/publicar', (req, res) => {
    res.render('add');
});

routes.post('/publicar', ProductController.create);

routes.get('/vender', (req, res) => {
    res.render('produtor');
});


module.exports = routes;