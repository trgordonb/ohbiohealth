'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    //return queryInterface.sequelize.transaction(t => {
    //  return Promise.all([
    //    queryInterface.addColumn('tbl_visit', 'remark', {
    //      type: Sequelize.TEXT
    //    }, { transaction: t }),
    //    queryInterface.addColumn('tbl_visit', 'bpSystolic', {
    //      type: Sequelize.INTEGER,
    //    }, { transaction: t }),
    //    queryInterface.addColumn('tbl_visit', 'bpDiastolic', {
    //      type: Sequelize.INTEGER,
    //    }),
    //    queryInterface.addColumn('tbl_visit', 'bloodSugarLevel', {
    //      type: Sequelize.FLOAT
    //    })
    //  ]);
    //});
  },

  async down (queryInterface, Sequelize) {
    //return queryInterface.sequelize.transaction(t => {
    //  return Promise.all([
    //    queryInterface.removeColumn('tbl_visit', 'remark', { transaction: t }),
    //    queryInterface.removeColumn('tbl_visit', 'bpSystolic', { transaction: t }),
    //    queryInterface.removeColumn('tbl_visit', 'bpDiastolic', { transaction: t }),
    //    queryInterface.removeColumn('tbl_visit', 'bloodSugarLevel', { transaction: t }),
    //  ]);
    //});
  }
};
