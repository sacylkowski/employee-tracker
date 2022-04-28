const db = require("./connection");

class EmployeeDB {
    constructor (db) {
        this.connection = db;
    }

    viewAllDepartments() {
        return this.connection.query("SELECT * FROM department");
    }

    viewAllRoles() {
        return this.connection.query("SELECT role.*, department.name AS department FROM role LEFT JOIN department ON role.department = department.id");
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
        return this.connection.query("INSERT INTO employee (first_name, last_name, role, manager) VALUES (?)", employee)
    }
}

module.exports = new EmployeeDB(db);