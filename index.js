const {makeLog} = require("./utils/log");
const {questions} = require("./utils/questions");


const handleResponses = (resp) => {
  const badge = renderLicenseBadge(resp.license);
  const link = renderLicenseLink(resp.license);
  const git = `https://github.com/${resp.username}`;
  const email = resp.email;
  const readme = 
`# ${resp.title} 

## Badges
${badge}

## Description
    ${resp.description}

## Visuals

## Installation

## Usage

## Contributions

## Questions
If you have any questions about this README
you can reach me: *${git}*

or by email: *${email}*

## License
${link}

`;
  generateMarkdown(readme);
};


function renderLicenseBadge(license) {
  switch(license){
    case "No License":
      return "";
    case "Apache 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "Boost Software v1.0":
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    case "BSD 2-Clause 'Simplified'":
      return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
    case "BSD 3-Clause 'New' or 'Revised'":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "Creative Commons Zero v1.0":
      return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
    case "Eclipse Public v2.0":
      return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
    case "GNU Affero General Public v3.0":
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    case "GNU General Public v3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Mozilla Public v2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  };
};

function renderLicenseLink(license) {
  switch(license){
    case "No License":
      return "";
    case "Apache 2.0":
      return `Your application is covered under the [${license}](https://opensource.org/licenses/Apache-2.0) license.`;
    case "Boost Software v1.0":
      return `Your application is covered under the [${license}](https://www.boost.org/LICENSE_1_0.txt) license.`;
    case "BSD 2-Clause 'Simplified'":
      return `Your application is covered under the [${license}](https://opensource.org/licenses/BSD-2-Clause) license.`;
    case "BSD 3-Clause 'New' or 'Revised'":
      return `Your application is covered under the [${license}](https://opensource.org/licenses/BSD-3-Clause) license.`;
    case "Creative Commons Zero v1.0":
      return `Your application is covered under the [${license}](http://creativecommons.org/publicdomain/zero/1.0/) license.`;
    case "Eclipse Public v2.0":
      return `Your application is covered under the [${license}](https://opensource.org/licenses/EPL-1.0) license.`;
    case "GNU Affero General Public v3.0":
      return `Your application is covered under the [${license}](https://www.gnu.org/licenses/agpl-3.0) license.`;
    case "GNU General Public v3.0":
      return `Your application is covered under the [${license}](https://www.gnu.org/licenses/gpl-3.0) license.`;
    case "MIT":
      return `Your application is covered under the ${license}](https://opensource.org/licenses/MIT) license.`;
    case "Mozilla Public v2.0":
      return `Your application is covered under the [${license}](https://opensource.org/licenses/MPL-2.0) license.`;
  };
};


function generateMarkdown(data) {
  makeLog("README.md", data);
};

questions(handleResponses);


["No License", "Apache 2.0", "Boost Software v1.0", "BSD 2-Clause 'Simplified'", "BSD 3-Clause 'New' or 'Revised'", "Creative Commons Zero v1.0", "Eclipse Public v2.0", "GNU Affero General Public v3.0", "GNU General Public v3.0", "MIT", "Mozilla Public v2.0"]


// WHEN I choose a License for my application from a list of options

// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under



