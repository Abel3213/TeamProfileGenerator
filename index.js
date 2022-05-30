const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const { writeFile, copyFile } = require('./utils/generate-site.js');

const generatePage = require('./src/page-template')

const managerData = () => {
    console.log(`Please build your team`)
    return inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is the team manager's name?"
        },
        {
            type: 'text',
            name: 'id',
            message: "What is the team manager's id?"
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the team manager's email?"
        },
        {
            type: 'text',
            name: 'officeNumber',
            message: "What is the team manager's office number?"
        }
    ])
        .then(({ name, id, email, officeNumber }) => {
            this.Manager = new Manager(name, id, email, officeNumber);
            console.log(this.Manager)
        });
}

const menu = () => {
    return inquirer.prompt({
        type: 'list',
        message: 'Which type of team member would you like to add?',
        name: 'action',
        choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
    })
        .then(({ action }) => {
            if (action === 'Engineer') {
                inquirer.prompt([
                    {
                        type: 'text',
                        name: 'name',
                        message: "What is your engineer's name?"
                    },
                    {
                        type: 'text',
                        name: 'id',
                        message: "What is your engineer's id?"
                    },
                    {
                        type: 'text',
                        name: 'email',
                        message: "What is your engineer's email?"
                    },
                    {
                        type: 'text',
                        name: 'gitHub',
                        message: "What is your engineer's gitHub?"
                    }
                ])
                    .then(({ name, id, email, gitHub }) => {
                        this.Engineer = new Engineer(name, id, email, gitHub);
                        console.log(this.Engineer)
                        menu();
                    });
            } else if (action === 'Intern') {
                inquirer.prompt([
                    {
                        type: 'text',
                        name: 'name',
                        message: "What is your intern's name?"
                    },
                    {
                        type: 'text',
                        name: 'id',
                        message: "What is your intern's id?"
                    },
                    {
                        type: 'text',
                        name: 'email',
                        message: "What is your intern's email?"
                    },
                    {
                        type: 'text',
                        name: 'school',
                        message: "What is your intern's school?"
                    }
                ])
                    .then(({ name, id, email, school }) => {
                        this.Intern = new Intern(name, id, email, school);
                        console.log(this.Intern)
                        menu();
                    });
            }
        }
        )
}


managerData()
    .then(menu)

    // .then(({ action }) => {
    //     if (action === 'Intern') {
    //         inquirer.prompt([
    //             {
    //                 type: 'text',
    //                 name: 'name',
    //                 message: "What is your intern's name?"
    //             },
    //             {
    //                 type: 'text',
    //                 name: 'id',
    //                 message: "What is your intern's id?"
    //             },
    //             {
    //                 type: 'text',
    //                 name: 'email',
    //                 message: "What is your intern's email?"
    //             },
    //             {
    //                 type: 'text',
    //                 name: 'school',
    //                 message: "What is your intern's school?"
    //             }
    //         ])
    //             .then(({ name, id, email, school }) => {
    //                 this.Intern = new Intern(name, id, email, school);
    //                 console.log(this.Intern)
    //             });
    //     }
    // })
