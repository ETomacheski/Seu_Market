const User = require('../models/user');
const Product = require('../models/Product');

module.exports = {

    async index(req,res){
        const {name, id} = req.params;

        console.log(id+ " "+name);
        const product =  await Product.findOne({ where: {user_id:id, name: name } }, {
            include: { association : 'products' }
        });

        return res.json(product);
    },


    
}