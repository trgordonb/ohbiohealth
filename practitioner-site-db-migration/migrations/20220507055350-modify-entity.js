'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('tbl_entity', 'entityName', {
          type: Sequelize.STRING(60),
          allowNull: false
        }, { transaction: t }),
        queryInterface.addColumn('tbl_entity', 'bpSystolic', {
          type: Sequelize.INTEGER,
        }, { transaction: t }),
        queryInterface.addColumn('tbl_entity', 'bpDiastolic', {
          type: Sequelize.INTEGER,
        }),
        queryInterface.addColumn('tbl_entity', 'bloodSugarLevel', {
          type: Sequelize.FLOAT
        })
      ]);
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('tbl_entity', 'entityName', { transaction: t }),
        queryInterface.removeColumn('tbl_entity', 'bpSystolic', { transaction: t }),
        queryInterface.removeColumn('tbl_entity', 'bpDiastolic', { transaction: t }),
        queryInterface.removeColumn('tbl_entity', 'bloodSugarLevel', { transaction: t }),
      ]);
    });
  }
};
