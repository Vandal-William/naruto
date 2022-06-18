const { Client } = require('pg');

const client = new Client({
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
});

client.connect();

module.exports = client;