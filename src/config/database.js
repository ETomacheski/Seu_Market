module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '123456',
    database: 'izi_compras',
    define:{
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps:true,
        underscored:true,
    }
};