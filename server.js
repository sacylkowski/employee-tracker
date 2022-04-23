const { prompt } = require("inquirer");
const database = require("./db/employee_db");

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
    case "add_department":
        return addADepartment();   
    default:
        return quit();
}

}

async function viewAllDepartments() {
    const viewAD = await database.viewAllDepartments();
    console.log(viewAD);
    askMainQuestions();
}

async function addADepartment() {
    const department = await prompt([
        {
            name: "Name",
            message: "What is the name of the new department?"
        }
    ]);
    await database.addADepartment(department);
    console.log(`Added ${department.name} to the database`);
    askMainQuestions();
}

function quit() {
    console.log("Bye")
    process.exit();
};