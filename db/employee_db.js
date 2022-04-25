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

    addARole(role) {
        return this.connection.query("INSERT INTO role SET ?", role)
    }

    addAnEmployee(employee) {
        return this.connection.query("INSERT INTO employee SET ?", employee)
    }
}

module.exports = new EmployeeDB(db);