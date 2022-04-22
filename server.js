const inquirer = require("inquirer");
const db = require("./db/connection");

async function askMainQuestions() {
    const { choice } = await prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View All Departments",
                    value:
                },
                {
                    name: "View All Roles",
                    value:
                },
                {
                    name: "View All Employees",
                    value:
                },
                {
                    name: "Add A Department",
                    value:
                },
                {
                    name: "Add A Role",
                    value:
                },
                {
                    name: "Add An Employee",
                    value:
                },
                {
                    name: "Update An Employee Role",
                    value:
                },
                {
                    name: "Quit",
                    value: "QUIT",
                },
            ],       
         },
    ]),

    
}