'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'permissions',
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
        type_permission: Sequelize.STRING
      },
    )
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('permissions'); 
  }
};
