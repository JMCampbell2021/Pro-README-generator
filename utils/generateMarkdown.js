const licenseBadgelinks = require("./licenses")



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  data.lincenseBadge = licenseBadgelinks[data.license]

  return `# ${data.title}

  ${data.lincenseBadge}

  ## Description
  ${data.description}

  ## Table of Contents
   * [Installation](#installation)
   * [Technologies](#technologies)
   * [Usage](#usage)
   * [License](#license)
   * [How to Contribute](#how-to-contribute)
   * [Live Application Link](#live-application-link)
   * [Contact Information](#contact-information)
  
  ## Installation
  ${data.installation}

  ## Technologies
  ${data.technologies}

  ## Usage
  ${data.usage}

  ## License
  This repository is licensed under the ${data.license} license.

  ## Features

  ## How to Contribute

  ${data.contribute}

  [Contributor Covenant](https://www.contributor-covenant.org/)

  ## Live Application Link
  ${data.link}

  ## Contact Information

  [${data.username}](https://github.com/S{data.username})

  ${data.email}

  `;
}

module.exports = generateMarkdown;
