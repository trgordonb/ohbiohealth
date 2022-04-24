'use strict';
const csv = require('csvtojson')
const path = require('path')

module.exports = {
  async up (queryInterface, Sequelize) {
    let filePath = path.join(__dirname, 'painconsequences.csv')
      let jsonArray = await csv().fromFile(filePath)
      let data = jsonArray.map((item,idx) => ({
        consq_id: idx+1,
        consq_en: item.en_name,
        consq_zh: item.zh_name,
        createdAt: new Date(),
        updatedAt: new Date()
      }))
      await queryInterface.bulkInsert('tbl_consq', data, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tbl_consq', null, {});
  }
};
