'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('permissions',
      [
        {
          type_permission: 'create_catalog',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          type_permission: 'read_catalog',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          type_permission: 'update_catalog',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          type_permission: 'delete_catalog',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          type_permission: 'create_book',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          type_permission: 'read_book',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          type_permission: 'update_book',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          type_permission: 'delete_book',
          created_at: new Date(),
          updated_at: new Date()
        }
      ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('permissions', null, {});
  }
};