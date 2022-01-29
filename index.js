// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = () =>{
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter your title!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description explaining your project? (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please enter your title!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'tableofContent',
      message: 'Would you like to add a table of content?(optional)',
      validate: tableConfirm => {
          if (tableConfirm) {
              return true;
          } else {
              console.log('are you sure you dont want to add a table of contents?')
              return false;
          }
      }
    },
    {
      type: 'confirm',
      name: 'tableOfContent',
      message: 'Would you like to add a table of content?(optional)',
      default: true
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide table of content information',
      when: ({ tableOfContent }) => tableOfContent
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you this project with? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
  ])
}

// questions()
// console.log(questions)


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
