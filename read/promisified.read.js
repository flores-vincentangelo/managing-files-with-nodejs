const { convertCsv } = require('./csv.parse');
const fs = require('fs');
const { promisify } = require('util');

const readFilePromise = promisify(fs.readFile);

const fileName = "./data/pulitzer-circulation-data.csv";
const encoding = "utf8";

readFilePromise(fileName, encoding)
    .then(data => {
        // console.table(convertCsv(data))
    })
    .catch(err => {
        console.error(`Error with file: ${err}`);
        console.error(err.stack);
    });

const read = async () => {
    const data = await readFilePromise(fileName, encoding);
    console.table(convertCsv(data));
}

read();