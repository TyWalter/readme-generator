const fs = require('fs');

function makeLog(filename, contents){
  fs.writeFile(filename, contents, (err) => {
    if(err) console.log(err)
  });
};

module.exports = {
  makeLog
};