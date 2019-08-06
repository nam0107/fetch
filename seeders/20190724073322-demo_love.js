'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('loves',
      [
        {
          user_id: 1,
          book_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          user_id: 1,
          book_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          user_id: 2,
          book_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        }
      ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('loves', null, {});
  }
};