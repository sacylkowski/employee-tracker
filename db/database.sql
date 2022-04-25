-- creating the database --
DROP DATABASE IF EXISTS employeeDb;
CREATE DATABASE employeeDb;

-- using the employee database --
USE employeeDb;


-- DROP TABLE IF EXISTS department;

-- DROP TABLE IF EXISTS role;

-- DROP TABLE IF EXISTS employee;

-- creating the department table --
CREATE TABLE department (
  id INTEGER AUTO_INCREMENT PRIMARY KEY ,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department INTEGER,
  FOREIGN KEY (department) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employee (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role INTEGER NOT NULL,
  manager_id INTEGER,
  FOREIGN KEY (role) REFERENCES role(id) ON DELETE CASCADE
);