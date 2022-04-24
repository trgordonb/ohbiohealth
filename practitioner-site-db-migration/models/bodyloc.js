'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BodyLoc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BodyLoc.init({
    bodyloc_id: DataTypes.INTEGER,
    bodyloc_zh: DataTypes.STRING,
    bodyloc_en: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BodyLoc',
    tableName: 'tbl_bodyloc' 
  });
  return BodyLoc;
};