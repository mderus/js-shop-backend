const {createPool} = require('mysql2/promise');
require('dotenv').config();

const pool = createPool({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.MYSQL_DB,
  namedPlaceholders: true,
});

module.exports = {
  pool,
};
