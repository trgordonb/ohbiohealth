const { DataTypes } = require('sequelize');

const buildCause = (sequelize) => {
  const Cause = sequelize.define('Cause', {
        cause_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        cause_zh: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cause_en: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { 
        tableName: 'tbl_cause',
        modelName: 'Cause',
    })

  return Cause
}

module.exports = buildCause
