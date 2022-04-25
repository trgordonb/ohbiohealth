const { DataTypes } = require('sequelize');

const buildUser = (sequelize) => {
  const User = sequelize.define('User', {
        userId: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        branch_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: {
                    tableName: 'tbl_branch'
                },
                key: 'branch_id'
            }
        },
        role: {
            type: DataTypes.ENUM("admin", "user"),
            defaultValue: "user"
        },
        encryptedPassword: {
            type: DataTypes.STRING
        },
    }, { 
        tableName: 'tbl_user',
        modelName: 'User'
    })

  return User
}

module.exports = buildUser
