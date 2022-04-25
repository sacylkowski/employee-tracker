const db = require("./connection");

class EmployeeDB {
    constructor (db) {
        this.connection = db;
    }

    viewAllDepartments() {
        return this.connection.query("SELECT * FROM department");
    }

    viewAllRoles() {
        return this.connection.query("SELECT * FROM role");
    }

    viewAllEmployees() {
        return this.connection.query("SELECT * FROM employee");
    }

    addADepartment(department) {
        return this.connection.query("INSERT INTO department SET ?", department)
    }

    // addARole(department) {
    //     return this.connection.query("INSERT INTO role SET ?", department)
    // }
}

module.exports = new EmployeeDB(db);