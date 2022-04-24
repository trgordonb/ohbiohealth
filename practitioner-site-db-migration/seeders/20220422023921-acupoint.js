'use strict';
const csv = require('csvtojson')
const path = require('path')

module.exports = {
  async up (queryInterface, Sequelize) {
    let filePath = path.join(__dirname, 'acupoints.csv')
      let jsonArray = await csv().fromFile(filePath)
      let data = jsonArray.map((item) => ({
        acupt_id: item.en_name,
        acupt_en: item.en_name,
        acupt_zh: item.zh_name,
        createdAt: new Date(),
        updatedAt: new Date()
      }))
      await queryInterface.bulkInsert('tbl_acupt', data, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tbl_acupt', null, {});
  }
};
