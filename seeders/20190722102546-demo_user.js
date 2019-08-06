'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users',
      [
        {
          role_id: 1,
          user_name: 'thnam',
          password: '$2b$10$yls5lTEgO6z3nQNgSMf/RurHGJ1T9jI5rtw1ZrNwHa2ufHW3RYV62',
          email: 'trinhhoainam98@gmail.com',
          status: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          role_id: 2,
          user_name: 'hqkhanh',
          password: '$2b$10$yls5lTEgO6z3nQNgSMf/RurHGJ1T9jI5rtw1ZrNwHa2ufHW3RYV62',
          email: 'abc@gmail.com',
          status: 1,
          created_at: new Date(),
          updated_at: new Date()
        }
      ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};