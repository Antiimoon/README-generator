// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if (license === 'MIT') {
    badge = '![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)'
  } else if (license === 'Apache 2.0') {
    badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  } else if (license === 'GPL v3.0') {
    badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else {
    badge = ''
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if(license === 'MIT') {
    licenseLink = 'https://chooselicense.com/licenses/mit/'
  } else if (license === 'Apache 2.0') {
    licenseLink = 'http://www.apche.org/licenses/LICENSE-2.0'
  } else if (license === 'GPL v3.0') {
    licenseLink = 'https://www.gnu.org/licenses'
  } else {
    licenseLink = ''
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if (license === 'None') {
    licenseSection = ''
  } else {
    licenseSection = `License: ${license}`
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.Title}

  ## ${renderLicenseSection(data.license)} ${renderLicenseBadge(answer.License)}
  ## ${renderLicenseLink(data.License)}

  https://github.com/${data.askMe}
  #Description
  ${data.Description}
  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  
  # Installtion
  The following necessary dependencies must be installed to run the application.

  # Usage
  In order to use this app, ${data.Usage}

  # License
  This project is licensed under the ${data.License} license.

  # Contributions
  Contributors: ${data.Contribution}

  # Tests
  The following is needed to run the test: ${data.Tests}

  # Questions
  If you have any questions about the repo, open an issue or contact ${data.Usage}
`;
}

module.exports = generateMarkdown;
