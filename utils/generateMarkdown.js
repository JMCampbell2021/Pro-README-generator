const licenseBadgelinks = require("./licenses")



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  data.lincenseBadge = licenseBadgelinks[data.license]

  return `# ${data.title}

  ${data.lincenseBadge}

  ## Description
  ${data.description}

  ## Table of Contents
  ${data.content}
  
  ## Installation
  ${data.installation}

  ## Technologies
  ${data.technologies}

  ## Usage
  ${data.usage}

  ## Credits

  ## License
  This repository is licensed under the ${data.license} license.

  ## Badges

  ## Features

  ## How to Contribute
  ${data.contribute}

  ## Tests


  ## Go live Application

  [${data.title}](https://${data.username}.github.io/${data.repo})

  `;
}

module.exports = generateMarkdown;
