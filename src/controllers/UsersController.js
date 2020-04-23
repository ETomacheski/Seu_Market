const User = require('../models/user');

module.exports = {

    async index(req,res) {
        const users = await User.findAll();
        return res.json(users);
    },

    async create(req,res) {

        console.log(req.body);
        const { name, email,password, delivery_time, city, phone } = req.body;
        var image = null;
        
        if (req.file != null) {
            image = req.file.path;          
        }

        const user = await User.create(
        {   name, 
            email, 
            password, 
            image: image, 
            delivery_time, 
            phone
        });

        return res.redirect('/');
    
    },

    async delete(req,res) {
       
        const { id } = req.params;
        const user = await User.findOne({ where: { id: id } });

        user.destroy();

        res.end("Usuário removido com sucesso");
    },

    async update(req, res) {

        const { id } = req.params;
        const user = await User.findOne({where: {id: id}});
        const { name, email, password, delivery_time, city, phone } = req.body;
        var image = null;
        
        if (req.file != null) {
            image = req.file.path;          
        }

        user.update({ name, email, password, image: image, delivery_time, city, phone })
        
        return res.json(user);
        
    },

    async uniqueUser(req, res) {

        const { id } = req.params;
        const user = await User.findOne({where: {id: id}});
        
        if(user == null) {
            return res.status(404).render('404_error_template');
        }

        return res.json(user);
    }

}