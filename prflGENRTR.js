const inquirer = require('inquirer');
const fs = require('fs');
const { generatePage } = require('./src/profilePAGE-template');



const promptUser = () => {
    return inquirer.prompt([

        {
            type: 'input',
            name: 'name1',
            message: 'Note: This program only works for teams with 4 people. What is the name of team member 1?'
        },
        {
            type: 'input',
            name: 'id1',
            message: 'What is his/her employee ID?'
        },
        {
            type: 'input',
            name: 'office1',
            message: 'What is his/her office number'
        },
        {
            type: 'input',
            name: 'email1',
            message: 'What is his/her email address?'
        },
        {
            type: 'input',
            name: 'github1',
            message: 'What is his/her Github username?'
        },
        {
            type: 'input',
            name: 'name2',
            message: 'What is the name of team member 2?'
        },
        {
            type: 'input',
            name: 'id2',
            message: 'What is his/her employee ID?'
        },
        {
            type: 'input',
            name: 'office2',
            message: 'What is his/her office number'
        },
        {
            type: 'input',
            name: 'email2',
            message: 'What is his/her email address?'
        },
        
        {
            type: 'input',
            name: 'github2',
            message: 'What is his/her Github username?'
        },
        {
            type: 'input',
            name: 'name3',
            message: 'What is the name of team member 3?'
        },
        {
            type: 'input',
            name: 'id3',
            message: 'What is his/her employee ID?'
        },
        {
            type: 'input',
            name: 'office3',
            message: 'What is his/her office number'
        },
        {
            type: 'input',
            name: 'email3',
            message: 'What is his/her email address?'
        },
        {
            type: 'input',
            name: 'github3',
            message: 'What is his/her Github username?'
        },
        {
            type: 'input',
            name: 'name4',
            message: 'What is the name of team member 4?'
        },
        {
            type: 'input',
            name: 'id4',
            message: 'What is his/her employee ID?'
        },
        {
            type: 'input',
            name: 'office4',
            message: 'What is his/her office number'
        },
        {
            type: 'input',
            name: 'email4',
            message: 'What is his/her email address?'
        },
        {
            type: 'input',
            name: 'github4',
            message: 'What is his/her Github username?'
        }
    ])
}


promptUser()
    .then(response => {
        const indexPg = generatePage(response);
        fs.writeFile('TeamProfile.html', indexPg, err => {
            if (err) throw new Error(err);
            console.log('Page created!');
        });

    });
    