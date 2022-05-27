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
        const READme = generatePage(response);
        fs.writeFile('index.html', READme, err => {
            if (err) throw new Error(err);
            console.log('Page created!');
        });

    });
    