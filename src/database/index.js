const Sequelize = require('sequelize');
const dbconfig = require('../config/database');
const User = require('../models/user');
const Product = require('../models/Product');

const connection = new Sequelize(dbconfig);

User.init(connection.models);
Product.init(connection.models);

User.associate(connection.models);
Product.associate(connection.models);

module.exports = connection;