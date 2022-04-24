'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Acupoint extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Acupoint.init({
    acupt_id: DataTypes.STRING(10),
    acupt_zh: DataTypes.STRING,
    acupt_en: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Acupoint',
    tableName: 'tbl_acupt'
  });
  return Acupoint;
};