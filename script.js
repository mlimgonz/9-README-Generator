
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require ("")

// Use writeFileSync method to use promises instead of a callback function

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process if any: ",
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project usage for?"
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        }
    ]);
} 
const generateReadme = ({ projectTitle, description, installation, usage, username }) =>

function init = () => {
  promptUser()
    .then((answers) => fs.writeFileSync('script.js', generateReadme(answers)))
    .then(() => console.log('README Successfully generated'))
    .catch((err) => console.error(err));
};

init();


