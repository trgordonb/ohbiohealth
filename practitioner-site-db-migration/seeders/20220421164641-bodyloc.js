'use strict';
const csv = require('csvtojson')
const path = require('path')

module.exports = {
  async up (queryInterface, Sequelize) {
      let filePath = path.join(__dirname, 'painlocations.csv')
      let jsonArray = await csv().fromFile(filePath)
      let data = jsonArray.map((item,idx) => ({
        bodyloc_id: idx+1,
        bodyloc_en: item.en_name,
        bodyloc_zh: item.zh_name,
        createdAt: new Date(),
        updatedAt: new Date()
      }))
      await queryInterface.bulkInsert('tbl_bodyloc', data, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tbl_bodyloc', null, {});
  }
};
