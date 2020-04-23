const User = require('../models/user');
const bcrypt = require('bcrypt');

module.exports = {

    async index(req,res) {
        const users = await User.findAll();
        return res.json(users);
    },

    async create(req,res) {

        var { name, email, password, delivery_time, city, phone } = req.body;
        var image = null;
        
        const salt = bcrypt.genSaltSync(10);
        password = bcrypt.hashSync(password, salt);

        // bcrypt.compareSync(req.body.password, user.password));
        
        
        if (req.file != null) {
            image = req.file.path;          
        }

        await User.create( 
        {   
            name, 
            email, 
            password,
            delivery_time,
            city, 
            phone,
            image: image,
        });

        return res.redirect('/');
    
    },

    async delete(req,res) {
       
        const { id } = req.params;
        const user = await User.findOne({ where: { id: id } });

        user.destroy();

        return res.redirect('/usuarios');
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