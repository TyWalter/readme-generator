const inquirer = require("inquirer");

const questions = (callback) => inquirer.prompt([
  {
    type: 'input',
    message: 'What is the title of your README?',
    name: 'title'
  },
  {
    type: 'input',
    message: 'What is the decription of this README?',
    name: 'description'
  },
  {
    type: 'input',
    message: 'List out the table of contents of this README?',
    name: 'content'
  },
  {
    type: 'input',
    message: 'How do you install this README?',
    name: 'install'
  },
  {
    type: 'input',
    message: 'How is this README meant to be used?',
    name: 'usage'
  },
  {
    type: 'list',
    message: 'What license would you like for this README?',
    name: 'license',
    choices: ["No License", "Apache 2.0", "Boost Software v1.0", "BSD 2-Clause 'Simplified'", "BSD 3-Clause 'New' or 'Revised'", "Creative Commons Zero v1.0", "Eclipse Public v2.0", "GNU Affero General Public v3.0", "GNU General Public v3.0", "MIT", "Mozilla Public v2.0"]
  },
  {
    type: 'input',
    message: 'What are the contribution guidelines for this README?',
    name: 'contribution'
  },
  {
    type: 'input',
    message: 'What test instructions do you want to include in this README?',
    name: 'test'
  },
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username'
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email'
  }
]).then((resp) => {
  callback(resp);
});

module.exports = {
  questions
}

/* GIVEN a command-line application that accepts user input

WHEN I am prompted for information about my application repository

THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions



WHEN I enter my project title

THEN this is displayed as the title of the README



WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions

THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests



WHEN I choose a license for my application from a list of options

THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under



WHEN I enter my GitHub username

THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile



WHEN I enter my email address

THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions



WHEN I click on the links in the Table of Contents

THEN I am taken to the corresponding section of the README

*/