'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('permissiondetails',
      [
        {
          role_id: 1,
          permission_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          role_id: 1,
          permission_id: 6,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          role_id: 2,
          permission_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          role_id: 2,
          permission_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          role_id: 2,
          permission_id: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          role_id: 2,
          permission_id: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          role_id: 2,
          permission_id: 5,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          role_id: 2,
          permission_id: 6,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          role_id: 2,
          permission_id: 7,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          role_id: 2,
          permission_id: 8,
          created_at: new Date(),
          updated_at: new Date()
        }
      ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('permissiondetails', null, {});
  }
};