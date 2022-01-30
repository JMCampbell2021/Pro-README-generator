// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = () =>{
  return inquirer.prompt([
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub user name?',
      validate: userName => {
        if (userName) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
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
      type: "list",
        message: "What license should your project have?",
        name: "license",
        choices: [
            "MIT",
            "Apache 2.0",
            "GNU v3",
            "Boost Software License 1.0",
            "Mozilla Public License 2.0"
        ]
    },
    {
      type: 'input',
      name: 'repo',
      message: 'What is the repo name for you project? (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter repo name!');
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
      type: 'confirm',
      name: 'tableofcontent',
      message: 'Would you like to add a table of content?(optional)',
      default: true
    },
    {
      type: 'checkbox',
      name: 'content',
      message: 'Which content information you want to show in the table',
      when: ({ tableofcontent }) => tableofcontent,
      choices: [
        ' * [Installation](#installation)',
        ' * [Technologies](#technologies)',
        ' * [Usage](#usage)',
        ' * [License](#license)',
        ' * [Contributing](#contributing)',
        ' * [Tests](#tests)',
        ' * [Questions](#questions)'
      ]
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
    },
    {
      type: 'confirm',
      name: 'usageinfo',
      message: 'Would you like to add a usage information?(optional)',
      default: true
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use. Include screenshots as needed.',
      when: ({ usageinfo }) => usageinfo,
    },
    {
      type: 'checkbox',
      name: 'technologies',
      message: 'What did you use for this project? (Check all that apply)',
      choices: [' * JavaScript', ' * HTML', ' * CSS', ' * ES6', ' * jQuery', ' * Bootstrap', ' * Node']
    },
  ])
}

// questions()
// // console.log(questions)


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./dist/READMEgenerated.md', data,(err) => {
      if(err) console.log('error')});
}

// TODO: Create a function to initialize app
async function init() {
  let answers = await questions ();
  writeToFile((answers.fileName),(generateMarkdown(answers)));
}

// Function call to initialize app
init();
