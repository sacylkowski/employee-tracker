const { prompt } = require("inquirer");
const database = require("./db/employee_db");
require("console.table");

askMainQuestions();

// start main prompt with questions
async function askMainQuestions() {
    const { choice } = await prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View All Departments",
                    value: "view_departments"
                },
                {
                    name: "View All Roles",
                    value: "view_roles"
                },
                {
                    name: "View All Employees",
                    value: "view_employees"
                },
                {
                    name: "Add A Department",
                    value: "add_department"
                },
                {
                    name: "Add A Role",
                    value: "add_role"
                },
                {
                    name: "Add An Employee",
                    value: "add_employee"
                },
                {
                    name: "Update An Employee Role",
                    value: "update_employee"
                },
                {
                    name: "Quit",
                    value: "QUIT",
                },
            ],       
         },
    ])
// switch statement 
switch (choice) {
    case "view_departments":
        return viewAllDepartments();
    case "view_roles":
        return viewAllRoles();
    case "view_employees":
        return viewAllEmployees();
    case "add_department":
        return addADepartment();   
    case "add_role":
        return addARole();
    case "add_employee":
        return addAnEmployee();
    case "update_employee":
        return updateEmployeeRole();
    default:
        return quit();
}

}

async function viewAllDepartments() {
    const viewAD = await database.viewAllDepartments();
    console.table(viewAD);
    askMainQuestions();
}

async function viewAllRoles() {
    const viewAR = await database.viewAllRoles();
    console.table(viewAR);
    askMainQuestions();
}

async function viewAllEmployees() {
    const viewAE = await database.viewAllEmployees();
    console.table(viewAE);
    askMainQuestions();
}

async function addADepartment() {
    const department = await prompt([
        {
            name: "name",
            message: "What is the name of the new department?"
        }
    ]);
    await database.addADepartment(department);
    console.log(`Added ${department.name} to the database`);
    askMainQuestions();
}


async function addARole() {
    const departments = await database.viewAllDepartments();
    // console.log(departments)
    // finds all departments (names and ids) and pushes them into an empty array
    let departmentChoices = [];
    departments.map((department) => {
        departmentChoices.push({name: department.name, value: department.id});
    })
    // console.log(departmentChoices)
    const role = await prompt([
        {
            name: "title",
            message: "What is the name of the new role?"
        },
        {
            name: "salary",
            message: "What is the salary of the new role?"
        },
        {
            type: "list",
            name: "department",
            message: "What department is the new role in?",
            choices: departmentChoices
        }
    ]);
    role.salary = parseInt(role.salary);
    await database.addARole(role);
    console.log(`Added ${role.title} to the database`);
    askMainQuestions();
}

async function addAnEmployee() {
    const roles = await database.viewAllRoles();
    // console.log(roles)
     // finds all roles (names and ids) and pushes them into an empty array
    let roleChoices = [];
    roles.map((role) => {
        roleChoices.push({name: role.title, value: role.id});
    })
    // console.log(roleChoices)
    const employee = await prompt([
        {
            name: "first_name",
            message: "What is the first name of the new employee?"
        },
        {
            name: "last_name",
            message: "What is the last name of the new employee?"
        },
        {
            type: "list",
            name: "role",
            message: "What is the role of the new employee?",
            choices: roleChoices
        },
        {
            name: "manager",
            message: "Who is the manager of the new employee?"
        }
    ]);
    await database.addAnEmployee(employee);
    console.log(`Added ${employee.first_name} to the database`);
    askMainQuestions();
}

async function updateEmployeeRole() {
    const employees = await database.viewAllEmployees();
    // console.log(employees)
    let employeeChoices = [];
    employees.map((employee) => {
        employeeChoices.push({name: employee.first_name, value: employee.id});
    })
    // console.log(employeeChoices)
    const roles = await database.viewAllRoles();
    // console.log(roles)
    let roleChoices = [];
    roles.map((role) => {
        roleChoices.push({name: role.title, value: role.id});
    })
    const employee = await prompt([
        {
            type: "list",
            name: "employee",
            message: "Which employee's role would you like to update?",
            choices: employeeChoices
        },
        {
            type: "list",
            name: "role",
            message: "What is the employee's new role?",
            choices: roleChoices
        }
    ]);
    // console.log(employee);
    await database.updateEmployeeRole(employee.employee, employee.role);
    // console.log(`Updated ${employee.first_name}'s role in the database.`);
    askMainQuestions();
}

function quit() {
    console.log("Thanks a bunch!")
    process.exit();
};
