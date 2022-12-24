const Pool = require('pg').Pool
const pool = new Pool({
    user: 'api',
    host: 'localhost',
    database: 'galeria',
    password: 'api',
    port: 5432
});

module.exports = { pool }