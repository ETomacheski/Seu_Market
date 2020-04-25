module.exports = {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
          require: true,
          // Ref.: https://github.com/brianc/node-postgres/issues/2009
          rejectUnauthorized: false,
        },
        keepAlive: true,        
      },      
      ssl: true,
    host: 'ec2-54-159-112-44.compute-1.amazonaws.com',
    port:5432,
    username: 'burhcephzmljnu',
    password: 'e3649adf22ce9c15f8185b432af25729abac4f1bcd0e7997f60ff2151db9a195',
    database: 'd8rgq0i1a8rord',
    define:{
        timestamps:true,
        underscored:true,
    }
};