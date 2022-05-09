'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbl_entity', {
      entity_id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      branch_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: 'tbl_branch'
          },
          key: 'branch_id'
        }
      },
      entityName: {
        type: Sequelize.STRING(60),
        allowNull: false
      },
      gender: {
        type: Sequelize.ENUM('M','F')
      },
      birthyear: {
        type: Sequelize.INTEGER
      },
      occupation: {
        type: Sequelize.STRING(45)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      enteredBy: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'tbl_user'
          },
          key: 'userId'
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tbl_entity');
  }
};