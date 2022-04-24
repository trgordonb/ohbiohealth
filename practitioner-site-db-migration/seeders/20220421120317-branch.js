'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('tbl_branch', [{
        branch_id: 1,
        description: 'Main',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        branch_id: 2,
        description: 'Sham Sui Po',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tbl_branch', null, {});
  }
};
