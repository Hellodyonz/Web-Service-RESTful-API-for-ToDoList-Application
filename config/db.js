const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    host: 'sql.freedb.tech',
    dialect: 'mysql',
    username: 'freedb_adyonz',
    password: 'Ar!a6txy?$Krvth',
    database: 'freedb_todolist_dbx',
    PORT: 3306
  });

  module.exports = sequelize