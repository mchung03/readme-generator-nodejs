// TODO: Include packages needed for this application
const generateMarkdown = require(`./utils/generateMarkdown`)
const inquirer = require("inquirer");
const fs = require('fs');
const licenseJS = require('./license')
const licenses = licenseJS.map(license => {
    return license.name
})

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is a description of the project? What, why and how?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Installation instructions. How do users use your project? Type N/A if not applicable.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Any usage information?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are some contribution guidelines? Type N/A if not applicable.',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Any test instructions? Type N/A if not applicable.',
        name: 'test',
    },
    {
        type: 'checkbox',
        message: 'Select your license',
        name: 'license',
        choices: licenses
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
        
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(answers)
        let README = generateMarkdown(answers)
        fs.writeFile('createdREADME.md', README, (err) => {
            if(err) throw err;
            console.log("The file has been created")
        })
    })
    .catch((error) => {
        console.log(error)
    })
}

// Function call to initialize app
init();

