'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('products', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement: true,
          allowNull: false,
        },
        user_id:{
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {model:'users',key:'id'},
          onUpdate:'CASCADE',
          onDelete:'CASCADE',
        },
        price:{
          type: Sequelize.DOUBLE,
          allowNull:false,
        },
        name:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        description:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        image:{
          type: Sequelize.STRING,

        },        
        
        created_at:{
          type: Sequelize.DATE,
          
        },
        updated_at:{
          type: Sequelize.DATE,
          
        },
      });
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('products');

    
  }
};
