const fs = require('fs');

// Takes the filename which is README.md and it's contents and creates/overwrites a README.md file
function makeLog(filename, contents){
  fs.writeFile(filename, contents, (err) => {
    if(err) console.log(err)
  });
};

// Exports the makeLog function to be used on index.js
module.exports = {
  makeLog
};