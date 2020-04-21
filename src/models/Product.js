const {Model,DataTypes} = require ('sequelize');

class Product extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            description:DataTypes.STRING,
            price:  DataTypes.DOUBLE,
            image: DataTypes.STRING
        }, {
            sequelize
        })
    }
    static associate(models){
        this.belongsTo(models.User,{foreignKey :'user_id',as : 'users'})
    }
}

module.exports = Product;