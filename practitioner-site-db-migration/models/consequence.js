'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Consequence extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Consequence.init({
    consq_id: DataTypes.INTEGER,
    consq_zh: DataTypes.STRING,
    consq_en: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Consequence',
    tableName: 'tbl_consq'
  });
  return Consequence;
};