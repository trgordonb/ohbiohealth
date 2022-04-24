const { DataTypes } = require('sequelize');

const buildBodyLoc = (sequelize) => {
  const BodyLoc = sequelize.define('BodyLoc', {
        bodyloc_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        bodyloc_zh: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bodyloc_en: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { 
        tableName: 'tbl_bodyloc',
        modelName: 'BodyLoc',
    })

  return BodyLoc
}

module.exports = buildBodyLoc
