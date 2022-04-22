const mysql = require("mysql2");

// connect to database
const db = mysql.createConnection(
    {
        host: "localhost",
        // your SQL username,
        user: "root",

        // your SQL password
        password: "Bananabread27",

        database: "employee"
    },
    console.log("Connected to the employee database.")
);

module.exports = db;