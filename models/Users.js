const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db')

const User = sequelize.define('User', {

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull : false
  },
  password: {
    type: DataTypes.STRING,
    allowNull : false
  },
  address: {
    type: DataTypes.STRING,
    allowNull : true,
    defaultValue: "secret"
  },
}, {
  timestamps: false
});

module.exports = User