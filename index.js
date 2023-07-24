// TODO: Include packages needed for this application
const generateMarkdown = require(`./utils/generateMarkdown`)
const inquirer = require("inquirer");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is a description of the project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Any installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Any usage information?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are some contribution guidelines?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Any test instructions?',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Select your license',
        name: 'license',
        choices: ["Apache License 2.0", "GNU General Public License v.3.0", "MIT License", 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"]
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

