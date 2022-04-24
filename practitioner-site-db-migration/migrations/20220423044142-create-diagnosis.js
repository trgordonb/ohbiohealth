'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbl_visit_diag', {
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
        type: Sequelize.INTEGER,
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
      category: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'tbl_cat'
          },
          key: 'cat_id'
        }
      },
      apply_minute: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      qe_acupt_1: {
        type: Sequelize.STRING(10),
        references: {
          model: {
            tableName: 'tbl_acupt'
          },
          key: 'acupt_id'
        },
      },
      qe_acupt_2: {
        type: Sequelize.STRING(10),
        references: {
          model: {
            tableName: 'tbl_acupt'
          },
          key: 'acupt_id'
        },
      },
      qe_acupt_3: {
        type: Sequelize.STRING(10),
        references: {
          model: {
            tableName: 'tbl_acupt'
          },
          key: 'acupt_id'
        },
      },
      bem_acupt_1: {
        type: Sequelize.STRING(10),
        references: {
          model: {
            tableName: 'tbl_acupt'
          },
          key: 'acupt_id'
        },
      },
      bem_acupt_2: {
        type: Sequelize.STRING(10),
        references: {
          model: {
            tableName: 'tbl_acupt'
          },
          key: 'acupt_id'
        },
      },
      bem_acupt_3: {
        type: Sequelize.STRING(10),
        references: {
          model: {
            tableName: 'tbl_acupt'
          },
          key: 'acupt_id'
        },
      },
      bem_acupt_4: {
        type: Sequelize.STRING(10),
        references: {
          model: {
            tableName: 'tbl_acupt'
          },
          key: 'acupt_id'
        },
      },
      bem_acupt_5: {
        type: Sequelize.STRING(10),
        references: {
          model: {
            tableName: 'tbl_acupt'
          },
          key: 'acupt_id'
        },
      },
      bem_acupt_6: {
        type: Sequelize.STRING(10),
        references: {
          model: {
            tableName: 'tbl_acupt'
          },
          key: 'acupt_id'
        },
      },
      bem_acupt_7: {
        type: Sequelize.STRING(10),
        references: {
          model: {
            tableName: 'tbl_acupt'
          },
          key: 'acupt_id'
        },
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
    await queryInterface.dropTable('tbl_visit_diag');
  }
};