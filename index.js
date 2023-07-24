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
    // https://github.com/${username}
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

