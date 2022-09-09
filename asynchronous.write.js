const { writeFile } = require('fs');

const fileName = './data/app.log';
const data = `163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /write-file-test" 405 21512`;

writeFile(fileName, data, (err) => {
    err ? console.error(err) : console.log("file saved");
});