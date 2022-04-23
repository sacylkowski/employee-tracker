const inquirer = require("inquirer");


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
    default:
        return quit();
}

}

async function viewAllDepartments() {

}

function quit() {
    console.log("Bye")
    process.exit();
};