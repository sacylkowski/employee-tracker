const db = require("./connection");

class EmployeeDB {
    constructor (db) {
        this.connection = db;
    }

    viewAllDepartments() {
        return console.log("hello");
    }
}

module.exports = new EmployeeDB(db);