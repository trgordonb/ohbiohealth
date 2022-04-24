const { DataTypes } = require('sequelize');

const buildAcupoint = (sequelize) => {
  const Acupoint = sequelize.define('Acupoint', {
        acupt_id: {
            type: DataTypes.STRING(10),
            primaryKey: true,
            allowNull: false,
        },
        acupt_zh: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        acupt_en: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { 
        tableName: 'tbl_acupt',
        modelName: 'Acupoint',
    })

  return Acupoint
}

module.exports = buildAcupoint
