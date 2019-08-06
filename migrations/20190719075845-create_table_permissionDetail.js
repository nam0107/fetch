'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'PermissionDetails',
      {
        permission_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          references: {
            model: 'permissions',
            key: 'id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        },
        role_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          references: {
            model: 'roles',
            key: 'id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
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
    return queryInterface.dropTable('PermissionDetails');
  }
};
