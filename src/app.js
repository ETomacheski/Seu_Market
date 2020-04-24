const path = require('path');
const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require("body-parser");

const routes = require('./routes');

require('./database/index')
require("dotenv").config();
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}))
app.use(express.static('./src/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.text({defaultCharset: 'utf-8'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);


module.exports = app;