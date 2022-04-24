'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Branch extends Model {
    static associate(models) {
      // define association here

    }
  }
  Branch.init({
    branch_id: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Branch',
    tableName: 'tbl_branch'
  });
  return Branch;
};
/**module.exports = (sequelize, DataTypes) => {
  const Branch = sequelize.define('Branch', {
    branch_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
      tableName: 'tbl_branch' ,
      modelName: 'Branch'
  })

  Branch.associate = function(models) {
    Branch.hasMany(models.Entity, {
      foreignKey: 'branch_id',
      as: 'branch_id'
    })
  }
  return Branch
}*/