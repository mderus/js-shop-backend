const {createPool} = require('mysql2/promise');
require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'js_shop',
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    operatorsAliases: 0,
  }
);

// const pool = createPool({
//   port: process.env.DB_PORT,
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   database: process.env.MYSQL_DB,
//   namedPlaceholders: true,
// });

module.exports = sequelize;
global.sequelize = sequelize;
