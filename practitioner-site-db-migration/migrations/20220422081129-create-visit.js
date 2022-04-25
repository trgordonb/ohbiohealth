'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbl_visit', {
      entity_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: {
            tableName: 'tbl_entity'
          },
          key: 'entity_id'
        }
      },
      branch_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        references: {
          model: {
            tableName: 'tbl_branch'
          },
          key: 'branch_id'
        }
      },
      date: {
        type: Sequelize.DATE,
        primaryKey: true,
        allowNull: false
      },
      duration: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      symptom_loc1: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'tbl_bodyloc'
          },
          key: 'bodyloc_id'
        }
      },
      symptom_loc2: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'tbl_bodyloc'
          },
          key: 'bodyloc_id'
        }
      },
      symptom_cause: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'tbl_cause'
          },
          key: 'cause_id'
        }
      },
      symptom_consq: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'tbl_consq'
          },
          key: 'consq_id'
        }
      },
      symptom_raise: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('tbl_visit');
  }
};