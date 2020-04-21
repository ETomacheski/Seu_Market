const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.static(__dirname + '/public'));
app.use('view engine', 'ejs');
app.use(routes);

module.exports = app;