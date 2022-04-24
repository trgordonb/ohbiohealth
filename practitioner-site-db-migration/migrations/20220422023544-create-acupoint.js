'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbl_acupt', {
      acupt_id: {
        type: Sequelize.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      acupt_zh: {
        type: Sequelize.STRING
      },
      acupt_en: {
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
    await queryInterface.dropTable('tbl_acupt');
  }
};