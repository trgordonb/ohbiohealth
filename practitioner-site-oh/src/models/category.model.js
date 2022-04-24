const { DataTypes } = require('sequelize');

const buildCategory = (sequelize) => {
  const Category = sequelize.define('Category', {
        cat_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        cat_zh: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cat_en: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { 
        tableName: 'tbl_cat',
        modelName: 'Category',
    })

  return Category
}

module.exports = buildCategory
