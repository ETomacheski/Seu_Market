const User = require('../models/user');
const Product = require('../models/Product');

module.exports = {

    async index(req, res) {
        const id  = req.query.id;

        const user = await User.findByPk(id, {
            include: { association : 'products' }
        });

        res.render('listaprodutos', {product: user.products});
    },

    async create(req, res) {
        const { id } = req.params;
        const { name, description, price, image } = req.body;       
        const user_id = id;
        
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
 
        res.end("Produto removido com sucesso");
     }

}