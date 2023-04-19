const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgres://ptxejyur:Kz9Cvth3UwFQ1W7ntHM0NhHBOHT-6qLZ@hattie.db.elephantsql.com/ptxejyur', 
  // Replace with your actual connection string
  // Other pool configuration options, if needed:
  // max: 20, // Maximum number of clients in the pool
  // idleTimeoutMillis: 30000, // Time a client can be idle before being closed
  // connectionTimeoutMillis: 2000, // Time to wait before timing out when connecting a new client
});

async function query(text, params) {
  const client = await pool.connect();
  try {
    return await client.query(text, params);
  } catch (err) {
    console.error('Error executing query', err.stack);
    throw err;
  } finally {
    client.release();
  }
}

module.exports = {
  query,
};












var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native

var conString = "postgres://ptxejyur:Kz9Cvth3UwFQ1W7ntHM0NhHBOHT-6qLZ@hattie.db.elephantsql.com/ptxejyur" //Can be found in the Details page
var client = new pg.Client(conString);

/*
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT * FROM users', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.table(result.rows);
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
});

*/

module.exports = client