const express = require('express');
const routes = express.Router();

routes.get('/cadastro', (req,res) => {
    res.render('register');
});

routes.post('/cadastro', (req, res) => {
    console.log(req.body);
});

module.exports = routes;