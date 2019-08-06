'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'catalogs',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        catalog_name: {
          type: Sequelize.STRING,
          unique: true
        },
        status: {
          type: Sequelize.INTEGER,
        },
        created_at: {
          type: Sequelize.DATE
        },
        updated_at: {
          type: Sequelize.DATE
        }
      },
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('catalogs');
  }
};
