const { DataTypes } = require('sequelize');

const buildConsequence = (sequelize) => {
  const Consequence = sequelize.define('Consequence', {
        consq_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        consq_zh: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        consq_en: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { 
        tableName: 'tbl_consq',
        modelName: 'Consequence',
    })

  return Consequence
}

module.exports = buildConsequence
