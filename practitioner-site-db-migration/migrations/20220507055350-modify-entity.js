'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    //return queryInterface.sequelize.transaction(t => {
    //  return Promise.all([
    //    queryInterface.addColumn('tbl_entity', 'entityName', {
    //      type: Sequelize.STRING(60),
    //      allowNull: false
    //    }, { transaction: t }),
    //  ]);
    //});
  },

  async down (queryInterface, Sequelize) {
    //return queryInterface.sequelize.transaction(t => {
    //  return Promise.all([
    //    queryInterface.removeColumn('tbl_entity', 'entityName', { transaction: t }),
    //  ]);
    //});
  }
};
