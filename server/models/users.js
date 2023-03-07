const { Pool } = require('pg');

const pgURI = process.env.PGURI;

const pool = new Pool({
  connectionString: pgURI
})

async function makeDB(){
  const makeUserTable = 'CREATE TABLE IF NOT EXISTS users ( email VARCHAR(255) NOT NULL PRIMARY KEY, penName VARCHAR(255), firstName VARCHAR(255), lastName VARCHAR(255), location VARCHAR(255), bio VARCHAR(255), poem1 VARCHAR(255), poem2 VARCHAR(255), poem3 VARCHAR(255) )';
  await pool.query(makeUserTable);
  console.log('database established');
}

makeDB();

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};
