const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

const routes = require('./routes');

app.use(express.json());
app.use(express.static('./src/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(routes);

module.exports = app;