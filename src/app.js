const path = require('path');
const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.static('./src/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(routes);

module.exports = app;