'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cause extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cause.init({
    cause_id: DataTypes.INTEGER,
    cause_zh: DataTypes.STRING,
    cause_en: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cause',
    tableName: 'tbl_cause'
  });
  return cause;
};