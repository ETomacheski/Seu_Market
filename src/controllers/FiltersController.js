const User = require('../models/user');
const Product = require('../models/Product');

module.exports = {

    async index(req, res) {
        
        const { id } = req.params;
        
        const product =  await Product.findOne({ where: {user_id: id} }, {
            include: { association: 'products' }
        });

        return res.json(product);
    }

}