const User = require('../models/user');
const Product = require('../models/Product');

module.exports = {

    async index(req, res) {
        
        const { id } = req.params;
        
        const product =  await Product.findOne({ where: {user_id: id} }, {
            include: { association: 'products' }
        });

        return res.json(product);
    },

    async listUsers(req, res) {
        
        const city = req.query.cidade;
        const users =  await User.findAll({ where: {city: city}});

        res.render('cart', {users: users});

    },

}