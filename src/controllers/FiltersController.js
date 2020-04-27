const User = require('../models/user');
const Product = require('../models/Product');

module.exports = {

    async index(req, res) {
        
        const { id } = req.query;
        
        const products =  await Product.findAll({ where: {user_id: id} }, {
            include: { association: 'products' }
        });

        res.render('produtor', {products: products})
    }

}