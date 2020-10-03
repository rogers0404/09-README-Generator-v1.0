////////////////// Confirm Usage /////////////////////////////////

const getMessage = (confirm, message) => { 
    if(confirm) 
        return message;
};

//////////////////////////////////////////////////////////////////

////////////////// Getting Badge /////////////////////////////////

const getBadge = license =>{
    switch(license) {
        case "Apache License 2.0":
          return "https://img.shields.io/static/v1?label=License&message=Apache&color=red&&style=plastic";
        case "GNU General Public License v3.0":
          return "https://img.shields.io/static/v1?label=License&message=GNU&color=yellowgreen&&style=plastic";
        case "Mozilla Public License 2.0":
            return "https://img.shields.io/static/v1?label=License&message=Mozilla&color=orange&&style=plastic";
        case "MIT License ":
            return "https://img.shields.io/static/v1?label=License&message=MIT&color=green&&style=plastic";
        case "None ":
            return "https://img.shields.io/static/v1?label=License&message=None&color=inactive&&style=plastic";    
    }
};
//////////////////////////////////////////////////////////////////

//////////////// README Template /////////////////////////////////
module.exports = templateData => {
    // destructure data by section to get the information
    const { title, description, install, confirmUsage, usage, confirmContribution, contribution, test, license, github, email} = templateData;
  
    return `
                                                                                        ${getBadge(license)}

# ${title}

## Description 

${description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#ontributing)
* [License](#license)
* [Test](#test)
* [Questions](#questions)


## Installation

${install}

## Usage 

${getMessage(confirmUsage, usage)}

## Contributing

${getMessage(confirmContribution, contribution)}

## License


[https://choosealicense.com/](https://choosealicense.com/)


## Tests

${test}

## Questions

If you have any questions about the application, you can check the documentation on my GitHub profile [https://github.com/${github}](https://github.com/${github}).

for more information you can have a question via email [${email}](${email})  .
    `;
  };