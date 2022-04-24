'use strict';
const csv = require('csvtojson')
const path = require('path')

module.exports = {
  async up (queryInterface, Sequelize) {
    let filePath = path.join(__dirname, 'paincategories.csv')
      let jsonArray = await csv().fromFile(filePath)
      let data = jsonArray.map((item,idx) => ({
        cat_id: idx+1,
        cat_en: item.en_name,
        cat_zh: item.zh_name,
        createdAt: new Date(),
        updatedAt: new Date()
      }))
      await queryInterface.bulkInsert('tbl_cat', data, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tbl_cat', null, {});
  }
};
