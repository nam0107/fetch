'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'comments',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        content: {
          type: Sequelize.STRING,
        },
        status: {
          type: Sequelize.INTEGER,
        },
        user_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'users',
            key: 'id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        },
        book_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'books',
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
    return queryInterface.dropTable('comments');
  }
};
