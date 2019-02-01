let fs = require('fs');
let filename = process.argv[2];
//console.log(process.argv);
fs.readFile(filename, 'utf-8', (err, data) => readFileFunction(err, data, filename));
console.log('This Statement is after readFile');

function readFileFunction(err, data, filename) {
    if(err) {
        console.error(err);
        return;
    }
    console.log(`${filename} file contains the text: ${data}`);
};