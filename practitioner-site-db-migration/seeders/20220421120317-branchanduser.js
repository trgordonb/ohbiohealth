'use strict';
const { uuid } = require('uuidv4');
const bcrypt = require('bcrypt')
const branchId1 = uuid()
const branchId2 = uuid()

module.exports = {
  async up (queryInterface, Sequelize) {
      const enc_password = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10)
      await queryInterface.bulkInsert('tbl_branch', [{
        branch_id: branchId1,
        description: 'Main',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        branch_id: branchId2,
        description: 'Sham Sui Po',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

     await queryInterface.bulkInsert('tbl_user', [{
        userId: uuid(),
        email: 'admin@ohbiohealth.com',
        branch_id: branchId1,
        role: "admin",
        encryptedPassword: enc_password,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tbl_user', null, {});
    await queryInterface.bulkDelete('tbl_branch', null, {});
  }
};
