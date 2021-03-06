'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: DataTypes.STRING,
    branch_id: DataTypes.INTEGER,
    role: DataTypes.STRING,
    encryptedPassword: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'tbl_user'
  });
  return User;
};