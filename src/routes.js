const express = require('express');
const routes = express.Router();
const multer = require('./multer');
const Auth = require('./config/auth');

// Controllers 
const UserController = require('./controllers/UsersController');
const ProductController = require('./controllers/ProductsController');
const SessionController = require('./controllers/SessionController');
const cartController = require('./controllers/cartController');
const filterController = require('./controllers/FiltersController');

// Routes 

routes.get('/', (req, res) => {
    res.render('index');
});

// Carrinho
routes.get('/carrinho', cartController.listAll);
routes.post('/carrinho', cartController.listByCity);

routes.get('/produtor', filterController.index);

routes.get('/contato', (req, res) => {
    res.render('contact');
});


// Usuário
routes.get('/usuarios', UserController.index);

routes.get('/cadastro', (req,res) => {
    res.render('register');
});
routes.post('/cadastro', multer.single('image'), UserController.create);

// EX de rota :http://localhost:3333/produtos?id=1
routes.get('/produtos/', ProductController.index);

// Session
routes.get('/login', (req, res) => {
    res.render('login');
});

routes.post('/login', SessionController.store);


// Rotas autenticadas
routes.use(Auth);

routes.get('/produtor', (req, res) => {
    res.render('produtor');
});

// routes.delete('/produtos/:id', ProductController.delete);

routes.get('/publicar', (req, res) => {
    res.render('add');
});

routes.post('/publicar/:id' , multer.single('image'), ProductController.create);

routes.get('/sair',(req,res)=>{
    req.logout();
	res.redirect('/');
})


module.exports = routes;