const { Pool } = require('pg');

const pgURI = process.env.PGURI;

const pool = new Pool({
  connectionString: pgURI
})

const makeUserTable = 'CREATE TABLE IF NOT EXISTS users ( email VARCHAR(255), firstName VARCHAR(255), lastName VARCHAR(255), bio VARCHAR(255), birthday VARCHAR(255), location VARCHAR(255) )';
pool.query(makeUserTable);
console.log('database established');

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};
