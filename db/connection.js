const mysql = require("mysql2");
require("dotenv").config();

// connect to database
const db = mysql.createConnection(
    {
        host: "localhost",
        // your SQL username,
        user: "root",

        // your SQL password
        password: process.env.BLUEBERRY_BABKA,

        database: "employeeDb"
    },
    console.log("Connected to the employeeDb database.")
);

module.exports = db;