'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'roles',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        created_at: {
          type: Sequelize.DATE
        },
        updated_at: {
          type: Sequelize.DATE
        },
        name: Sequelize.STRING
      },
    )
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('roles'); 
  }
};
