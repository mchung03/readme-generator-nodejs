// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const { makeBadge, ValidationError } = require('badge-maker')
const licenseJS = require('../license')

function renderLicenseBadge(license) {
  if(license.length > 0) {
    const format = {
      label: 'license',
      message: `${license}`,
      color: "green"
    }
  
    const svg = makeBadge(format)
    return svg
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license.length > 0) {
    const licenseLink = licenseJS.filter(obj => {
        return obj.name == license
    })
    const link = licenseLink[0].html_url
    return link
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license.length > 0){
    return `
  ## License
  - ${license} [${renderLicenseLink(license)}]
    `
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test](#test)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Test
  ${data.test}

  ${renderLicenseSection(data.license)}

  ## Questions
  Github link: (https://github.com/${data.username})
  For any additional questions, please email me at ${data.email}
`;
}

module.exports = generateMarkdown;
