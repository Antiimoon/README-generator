// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");

const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [{
        type: "input",
        message: "what is the title of the project?",
        name: "Title"
    }, {
        type : "input",
        message: "What is the project about? Give a detailed description of your project.",
        name: "Description"
    }, {
        type: "input",
        message: "Table of Contents.",
        name: "Table of Contents"
    }, {
        type: "input",
        message: "What does the user need to install to run this app (ie...dependencies)?",
        name: "Installation"
    }, {
        type: "input",
        message: "How is the app used? Give instructions",
        name: "Usage"
    }, {
        type: "input",
        message: "What liscense is being used? (ie...MIT, Apache 2.0, GPL v3.0)",
        name: "License"
    }, {
        type: "input",
        message: "Who contributed to this project?",
        name: "Contribution"
    }, {
        type: "input",
        message: "What commands are needed to test this app?",
        name: "Tests"
    }, {
        type: "input",
        message: "Contact info for inquiries.",
        name: "Questions"
    }, {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'Username'
    }, {
        type: 'input',
        message: 'What is your email address?',
        name: 'Email'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    var fileName = generateMarkdown(data);
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            console.log(data);
            writeToFile("readme-guide.md", generateMarkdown(data));
        });
}

// Function call to initialize app
init();

module.exports = questions;
