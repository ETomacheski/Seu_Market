const User = require('../models/user');

module.exports = {

    async listByCity(req, res) {
        const city = req.body.cidade;
        const users =  await User.findAll({ where: {city: city}});
              
        res.render('cart', { users: users });

    },

    async listAll(req, res) {
        const users = await User.findAll();
        console.log(users);
        res.render('cart', { users: users });
    }

}