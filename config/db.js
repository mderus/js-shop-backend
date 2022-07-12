import {createPool} from 'mysql2';

const {DB_PORT, DB_HOST, DB_USER, DB_PASSWORD, MYSQL_DB} = process.env;

const pool = createPool({
  port: DB_PORT,
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: MYSQL_DB,
  connectionLimit: 10,
});

export default pool;
