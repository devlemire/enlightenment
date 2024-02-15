const { Client } = require("pg");
const client = new Client();
const { PGDATABASE, PGUSER } = process.env;

const connect = async () => {
  await client.connect();
  console.log(`Connected to database: ${PGDATABASE} as user: ${PGUSER}`);
};

connect();

module.exports = client;
