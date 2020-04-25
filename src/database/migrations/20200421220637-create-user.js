'use strict';

const sequelize = require('sequelize');

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('users', { 
        id: {
          type: Sequelize.INTEGER ,
          primaryKey:true,
          autoIncrement:true,
          allowNull:false,
          },

          name:{
            type: Sequelize.STRING,
            allowNull: false
          },

          email:{
            type: Sequelize.STRING,
            unique:true,
            allowNull: false,
          },

          password:{
            type: Sequelize.STRING,
            allowNull:false,
          },

          city:{
            type: Sequelize.STRING,
            allowNull:false,
          },

          delivery_time:{
            type: Sequelize.STRING,
            allowNull:false,
          },

          image:{
            type: Sequelize.STRING,
          },

          phone:{
            type: Sequelize.STRING,
            allowNull: false,
          },

          created_at:{
            type: Sequelize.DATE,
            defaultValue: sequelize.literal('NOW()'),
            allowNull:false,
          },

          updated_at:{
            type: Sequelize.DATE,
            defaultValue: sequelize.literal('NOW()'),
            allowNull:false,
          },
       });
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('users');
    
  }
};
