'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Diagnosis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Diagnosis.init({
    entity_id: DataTypes.INTEGER,
    branch_id: DataTypes.INTEGER,
    daate: DataTypes.DATE,
    category: DataTypes.INTEGER,
    apply_minute: DataTypes.INTEGER,
    qe_acupt_1: DataTypes.STRING(10),
    qe_acupt_2: DataTypes.STRING(10),
    qe_acupt_3: DataTypes.STRING(10),
    bem_acupt_1: DataTypes.STRING(10),
    bem_acupt_2: DataTypes.STRING(10),
    bem_acupt_3: DataTypes.STRING(10),
    bem_acupt_4: DataTypes.STRING(10),
    bem_acupt_5: DataTypes.STRING(10),
    bem_acupt_6: DataTypes.STRING(10),
    bem_acupt_7: DataTypes.STRING(10)
  }, {
    sequelize,
    modelName: 'Diagnosis',
    tableName: 'tbl_visit_diag'
  });
  return Diagnosis;
};