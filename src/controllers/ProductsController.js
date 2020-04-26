const User = require('../models/user');
const Product = require('../models/Product');

module.exports = {

    async index(req, res) {
        const id  = req.query.id;

        const user = await User.findByPk(id, {
            include: { association : 'products' }
        });

        res.render('listaprodutos', { product: user.products , phone: user.phone});
    },

    async create(req, res) {
        const  user_id = req.params.id;
        const { name, description, price, image } = req.body;       
        
        const product = await Product.create({
            name,
            description,
            price,
            image,
            user_id,
        })

        return res.json(product);
    },

    async delete(req, res) {
        const { id } = req.params;
 
        const product = await Product.findOne({ where: { id: id } });
 
        product.destroy();
 
        res.status(204);
     }

}