const { prompt } = require("inquirer");
const database = require("./db/employee_db");
require("console.table");

askMainQuestions();

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
    const role = await prompt([
        {
            name: "name",
            message: "What is the name of the new role?"
        },
        {
            name: "salary",
            message: "What is the salary of the new role?"
        },
        {
            name: "department",
            message: "What department is the new role in?"
        }
    ]);
    await database.addARole(role);
    console.log(role)
    // console.log(`Added ${role.name} to the database`);
    askMainQuestions();
}

async function addAnEmployee() {
    const employee = await prompt([
        {
            name: "fname",
            message: "What is the first name of the new employee?"
        },
        {
            name: "lname",
            message: "What is the last name of the new employee?"
        },
        {
            name: "role",
            message: "What is the role of the new employee?"
        },
        {
            name: "manager",
            message: "Who is the manager of the new employee?"
        }
    ]);
    await database.addAnEmployee(employee);
    console.log(`Added ${employee.name} to the database`);
    askMainQuestions();
}

function quit() {
    console.log("Bye")
    process.exit();
};