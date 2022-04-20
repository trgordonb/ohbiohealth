const { DataTypes, UUIDV4 } = require('sequelize');

const buildUser = (sequelize) => {
  const User = sequelize.define('User', {
        entityId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        groupId: {
            type: DataTypes.ENUM("groupA","groupB","groupC","oh"),
            defaultValue: "oh"
        },
        role: {
            type: DataTypes.ENUM("admin", "user"),
            defaultValue: "user"
        },
        encryptedPassword: {
            type: DataTypes.STRING
        },
    }, {})

  return User
}

module.exports = buildUser
