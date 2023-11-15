const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db')

const Todo = sequelize.define('Todo', {

  value: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull : false
  }
}, {
  
});

module.exports = Todo