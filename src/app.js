const path = require('path');
const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

const routes = require('./routes');

require('./database/index');
require('dotenv').config();

// Security configs
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(helmet());

const limiter = rateLimit({ 
	windowMs: 1 * 60 * 1000,
	max: 10000
	// Limit of 10000 requests a minute.
}); 
app.use(limiter)

// Frontend configs.
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Parser configs.
app.use(bodyParser.text({defaultCharset: 'utf-8'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.locals.user = req.session.user_id;
	next();
});


app.use(routes);


module.exports = app;