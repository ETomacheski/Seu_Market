const User = require('../models/user');
const Product = require('../models/Product');

module.exports = {

    async index(req,res) {
        
        const { id } = req.params;
        
        const product =  await Product.findOneAll({ where: {user_id:id} }, {
            include: { association : 'products' }
        });

        return res.json(product);
    },
    async listUsers(req,res) {
        
        const { city } = req.params;
        
        const users =  await User.findOneAll({ where: {city:city}});

        return res.json(users);
    },

}