const { DataTypes } = require('sequelize');

const buildBranch = (sequelize) => {
    const Branch = sequelize.define('Branch', {
        branch_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{ 
        tableName: 'tbl_branch' ,
        modelName: 'Branch'
    })

    return Branch
}

module.exports = buildBranch