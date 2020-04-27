const User = require('../models/user');
const Product = require('../models/Product');

module.exports = {

    async index(req, res) {
        
        const { user } = req.query;
        
        const products =  await Product.findAll({ where: {user_id: user} }, {
            include: { association: 'products' }
        });

        console.log(products);

        res.render('produtor', {products: products})
    }

}