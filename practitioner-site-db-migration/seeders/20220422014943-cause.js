'use strict';
const csv = require('csvtojson')
const path = require('path')

module.exports = {
  async up (queryInterface, Sequelize) {
    let filePath = path.join(__dirname, 'paincauses.csv')
      let jsonArray = await csv().fromFile(filePath)
      let data = jsonArray.map((item,idx) => ({
        cause_id: idx+1,
        cause_en: item.en_name,
        cause_zh: item.zh_name,
        createdAt: new Date(),
        updatedAt: new Date()
      }))
      await queryInterface.bulkInsert('tbl_cause', data, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('tbl_cause', null, {});
  }
};
