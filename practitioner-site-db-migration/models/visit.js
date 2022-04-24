'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Visit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Visit.init({
    entity_id: DataTypes.INTEGER,
    branch_id: DataTypes.INTEGER,
    date: DataTypes.DATE,
    duration: DataTypes.FLOAT,
    symptom_loc1: DataTypes.INTEGER,
    symptom_loc2: DataTypes.INTEGER,
    symptom_cause: DataTypes.INTEGER,
    symptom_consq: DataTypes.INTEGER,
    symptom_raise: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Visit',
    tableName: 'tbl_visit'
  });
  return Visit;
};