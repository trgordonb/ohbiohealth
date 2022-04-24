'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbl_cause', {
      cause_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cause_zh: {
        type: Sequelize.STRING
      },
      cause_en: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tbl_cause');
  }
};