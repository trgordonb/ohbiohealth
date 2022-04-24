'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbl_user', {
      userId: {
        primaryKey: true,
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      branch_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      role: {
        type: Sequelize.ENUM("admin","user")
      },
      encryptedPassword: {
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
    await queryInterface.dropTable('tbl_user');
  }
};