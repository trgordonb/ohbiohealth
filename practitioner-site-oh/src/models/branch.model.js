const { DataTypes } = require('sequelize');

const buildBranch = (sequelize) => {
    const Branch = sequelize.define('Branch', {
        branch_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
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