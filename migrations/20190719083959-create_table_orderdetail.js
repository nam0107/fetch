'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'orderdetails',
      {
        order_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          references: {
            model: 'orders',
            key: 'id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        },
        book_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          references: {
            model: 'books',
            key: 'id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        },
        amount: {
          type: Sequelize.INTEGER,
        },
        quatity: {
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
    return queryInterface.dropTable('orderdetails');
  }
};
