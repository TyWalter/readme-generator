const {makeLog} = require("./utils/log");
const {questions} = require("./utils/questions");

// Takes the answers to the previously asked questions and formats them into a new markdown file. This creates only 1 copy of markdown and if new questions are answered, the previous markdown file will be overwritten
const handleResponses = (resp) => {
  const badge = renderLicenseBadge(resp.license);
  const link = renderLicenseLink(resp.license);
  const git = `https://github.com/${resp.username}`;
  const readme = 
`
<a id="title"></a>
# ${resp.title} 

<a id="badge"></a>
## Badges ${badge}

<a id="toc"></a>
## Table of Contents
* [Title](#title)

* [Badges](#badge)

* [Table of Contents](#toc)

* [Description](#desc)

* [Usage Guidelines](#usage)

* [Intallation Guidelines](#install)

* [Test Instructions](#test)

* [Contributions](#cont)

* [Questions](#question)

* [License](#license)

<a id="desc"></a>
## Description
${resp.description}

<a id="usage"></a>
## Usage Guidelines
    ${resp.usage}

<a id="install"></a>
## Installation Guidelines
    ${resp.install}

<a id="test"></a>
## Test Instructions
    ${resp.test}

<a id="cont"></a>
## Contributions
${resp.cont}

<a id="question"></a>
## Questions
If you have any questions about this README

you can reach me: *${git}*

or by sending me an e-mail at: *${resp.email}*

<a id="license"></a>
## License
${link}
`;
  generateMarkdown(readme);
};

// Takes whichever license was selected and returns a badge
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

// Takes whichever license was selected creates a clickable link to that licenses' webpage for further detail
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

// Generates a markdown file called README.md and will overwrite previous README.md files
function generateMarkdown(data) {
  makeLog("README.md", data);
};

// Takes the answers from the prompts and runs the handleResponses function
questions(handleResponses);