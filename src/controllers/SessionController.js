const User = require('../models/user');
const bacrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


class SessionController{
    async store(req,res){

        const {email,password} = req.body

        const user = await User.findOne({where:{email} })


        if(!user){
            return res.status(401).json({message: 'User not found'})
        }
        if(!(await bacrypt.compare(password, user.password))){
            return res.status(401).json({message:'Incorect password'});
        }

        return res.json({
            user,
            token: jwt.sign({id:user.id}, process.env.APP_SECRET)
        });
    }
}

module.exports = new SessionController();