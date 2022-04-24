'use strict';
const bcrypt = require('bcrypt')
const { uuid } = require('uuidv4');

module.exports = {
  async up (queryInterface, Sequelize) {
     const enc_password = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10)
     await queryInterface.bulkInsert('tbl_user', [{
        userId: uuid(),
        email: 'admin@ohbiohealth.com',
        branch_id: 1,
        role: "admin",
        encryptedPassword: enc_password,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('tbl_user', null, {});
  }
};
