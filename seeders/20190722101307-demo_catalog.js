'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('catalogs',
      [
        {
          catalog_name: 'Sách văn học',
          status: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          catalog_name: 'Sách khoa học',
          status: 1,
          created_at: new Date(),
          updated_at: new Date()
        }
      ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('catalogs', null, {});
  }
};