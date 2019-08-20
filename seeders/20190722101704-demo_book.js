'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('books',
      [
        {
          book_name: 'Nhà giả kim',
          author: 'Nam',
          price: 100000,
          description: 'abc abc abc',
          image: 'link/image...',
          quatity: 6,
          catalog_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          book_name: 'Khoa học và xã hội',
          author: 'Nam',
          price: 169000,
          description: 'abc abc abc',
          image: 'link/image...',
          quatity: 8,
          catalog_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        }
      ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('books', null, {});
  }
};