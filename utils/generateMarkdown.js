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

  ## How to Contribute

  ${data.contribute}

  [Contributor Covenant](https://www.contributor-covenant.org/)

  ## Live Application Link
  ${data.link}

  ## Contact Information

  For questions regarding this repository please contact me at ${data.email}. You can also view more of my work in Github at [${data.username}](https://github.com/S{data.username}).

  `;
}

module.exports = generateMarkdown;
