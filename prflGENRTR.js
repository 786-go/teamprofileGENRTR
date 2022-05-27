const inquirer = require('inquirer');
const fs = require('fs');
const { generatePage } = require('./src/profilePAGE-template');



const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github username?'
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
    