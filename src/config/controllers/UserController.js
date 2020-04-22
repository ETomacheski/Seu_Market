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
           
        }
        console.log({name,email, password,cnpj:"1234",image,delivery_time,phone})
        const user = await User.create({name,email, password,cnpj:"1234",image:"algo",delivery_time,phone});
        
        console.log(user)
        return res.end('usuario cadastrado com sucesso')
        
    }
}