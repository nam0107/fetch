'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('orderdetails',
      [
        {
          order_id: 1,
          book_id: 1,
          quatity: 1,
          amount: 100000,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          order_id: 2,
          book_id: 1,
          quatity: 1,
          amount: 100000,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          order_id: 2,
          book_id: 2,
          quatity: 1,
          amount: 169000,
          created_at: new Date(),
          updated_at: new Date()
        }
      ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orderdetails', null, {});
  }
};