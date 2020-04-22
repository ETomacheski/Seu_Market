const User = require('../../models/user');


module.exports = {
    async index(req,res){
        const users = await User.findAll();

        return res.json(users);
    },
    async create(req,res){

        const { name, email,password, delivery_time, city, phone } = req.body;
        var image;
        
        if (req.file != null) {
            image = req.file.path;
            const user = await User.create({name , password,delivery_time, image,city,phone });
        }else{
            const user = await User.create({name , password,delivery_time,city,phone });
        }
        console.log(user)
        return res.end(user)
        
    }
}