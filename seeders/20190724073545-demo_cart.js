'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('carts',
      [
        {
          user_id: 1,
          total_amount: 100000,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          user_id: 2,
          total_amount: 269000,
          created_at: new Date(),
          updated_at: new Date()
        }
      ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('carts', null, {});
  }
};