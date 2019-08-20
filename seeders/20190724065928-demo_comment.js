'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('comments',
      [
        {
          user_id: 1,
          book_id: 1,
          content: 'Sach hay',
          status: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          user_id: 1,
          book_id: 2,
          content: 'Sach ncl',
          status: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          user_id: 1,
          book_id: 1,
          content: 'Sach doc nhu cc',
          status: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          user_id: 2,
          book_id: 1,
          content: 'Sach ncl',
          status: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          user_id: 2,
          book_id: 2,
          content: 'Sach ncl',
          status: 1,
          created_at: new Date(),
          updated_at: new Date()
        }
      ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('comments', null, {});
  }
};