const inquirer = require("inquirer");

const questions = (callback) => inquirer.prompt([
  {
    type: 'input',
    message: 'What is the title of your README?',
    name: 'title'
  },
  {
    type: 'textarea',
    message: 'What is the decription of this README?',
    name: 'description'
  },
  {
    type: 'textarea',
    message: 'List out the table of contents of this README?',
    name: 'content'
  },
  {
    type: 'textarea',
    message: 'How do you install this README?',
    name: 'install'
  },
  {
    type: 'textarea',
    message: 'How is this README meant to be used?',
    name: 'usage'
  },
  {
    type: 'list',
    message: 'Are there any licenses for this README?',
    name: 'license',
    choices: ["Apache 2.0", "GNU General Public v3.0", "MIT", "BSD 2-Clause 'Simplified'", "BSD 3-Clause 'New' or 'Revised'", "Boost Software v1.0","Creative Commons Zero v1.0", "Eclipse Public v2.0", "GNU Affero General Public v3.0", "GNU General Public v2.1", "Mozilla Public v2.0"]
  },
  {
    type: 'textarea',
    message: 'List out the contributions for this README',
    name: 'contribution'
  },
  {
    type: 'textarea',
    message: 'What test guidelines do you want to include in this README?',
    name: 'test'
  },
  {
    type: 'textarea',
    message: 'How should someone contact you if they have questions about the README?',
    name: 'question'
  }
]).then(({title, description, content, install, usage, license, contribution, test, question}) => {
  const result = 
  callback(result)
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