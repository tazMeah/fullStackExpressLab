const pg = require("pg");
const pool = new pg.Pool({
    user: "postgres",
    password: "password",
    host: "localhost",
    port: 5432,
    database: "ExpressShopDB",
    ssl: false
});


module.exports = pool;