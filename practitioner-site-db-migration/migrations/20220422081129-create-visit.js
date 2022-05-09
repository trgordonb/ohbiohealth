'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbl_visit', {
      _id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      entity_id: {
        type: Sequelize.UUID,
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
      bpSystolic: {
        type: Sequelize.INTEGER
      },
      bpDiastolic: {
        type: Sequelize.INTEGER
      },
      bloodSugarLevel: {
        type: Sequelize.FLOAT
      },
      remark: {
        type: Sequelize.TEXT
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