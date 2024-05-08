const fs = require('fs');

// get the absolute path of the current working directory
let filePath = fs.realpathSync('./files');

// print it
console.log(filePath);