const User = require('../models/user');

module.exports = {

    async index(req,res) {
        const users = await User.findAll();
        return res.json(users);
    },

    async create(req,res) {

        const { name, email,password, delivery_time, city, phone } = req.body;
        var image = null;
        
        if (req.file != null) {
            image = req.file.path;          
        }

        const user = await User.create({name, email, password, image: image, delivery_time, phone});

        return res.redirect('/');
    
    },
    async delete(req,res){
       const {id} = req.params;

       const user = await User.findOne({ where: { id: id } });

       user.destroy();

       res.end("Usuário removido com sucesso");
    }
}