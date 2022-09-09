const { constants, writeFile } = require('fs');

const fileName = './data/app.log';
const fileName2 = './data/newapp.log';
const data = `163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /write-file-test" 405 21512`;


//replaces all contents
// writeFile(fileName, data, (err) => {
//     err ? console.error(err) : console.log("file saved");
// });
writeFile(fileName2, data, { encoding: 'utf8' }, 
    (err) => {
        err ? console.error(err) : console.log("file saved");
});