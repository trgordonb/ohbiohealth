'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entity extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  Entity.init({
    entity_id: DataTypes.INTEGER,
    branch_id: DataTypes.INTEGER,
    gender: DataTypes.STRING(1),
    birthyear: DataTypes.INTEGER,
    occupation: DataTypes.STRING(45)
  }, {
    sequelize,
    modelName: 'Entity',
    tableName: 'tbl_entity'
  });
  return Entity;
};

/**module.exports =  (sequelize, DataTypes) => {
  const Entity = sequelize.define('Entity', {
    entity_id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    branch_id: {
      type: DataTypes.INTEGER ,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    birthyear: {
      type: DataTypes .INTEGER,
      allowNull: false
    },
    occupation: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'tbl_entity',
    modelName: 'Entity'
  })

  Entity.associate = function(models) {
    Entity.belongsTo(models.Branch, {
      foreignKey: 'branch_id',
      as: 'branch_id'
    })
  }

  return Entity
  
}*/