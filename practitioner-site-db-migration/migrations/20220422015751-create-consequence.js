'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbl_consq', {
      consq_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      consq_zh: {
        type: Sequelize.STRING
      },
      consq_en: {
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
    await queryInterface.dropTable('tbl_consq');
  }
};