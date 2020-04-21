const {Model,DataTypes} = require ('sequelize');

class User extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.INTEGER,
            email:DataTypes.STRING,
            company_name:DataTypes.STRING,
            password:DataTypes.STRING,
            cnpj:DataTypes.STRING,
            delivery_time:DataTypes.STRING,
            image:DataTypes.STRING,
            phone:DataTypes.STRING,

        }, {
            sequelize
        })
    }
    static associate(models){
        this.hasMany(models.Product,{foreignKey :'user_id', as : 'products'});
        
    }

}

module.exports = User;