'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  //  return queryInterface.sequelize.transaction(t => {
  //    return Promise.all([
  //      queryInterface.addColumn('tbl_visit_diag', 'remark', {
  //        type: Sequelize.TEXT
  //      }, { transaction: t }),
  //    ]);
  //  });
  },

  async down (queryInterface, Sequelize) {
  //  return queryInterface.sequelize.transaction(t => {
  //    return Promise.all([
  //      queryInterface.removeColumn('tbl_visit_diag', 'remark', { transaction: t }),
  //    ]);
  //  });
  }
};
