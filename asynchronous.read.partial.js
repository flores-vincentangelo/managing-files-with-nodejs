const { convertCsv } = require('./csv.parse');
const { open, read } = require('fs');
const { readFile } = require('fs');

const fileName = "./data/pulitzer-circulation-data.csv";
const encoding = "utf8";

open(fileName, (err, fd) => {
    const buffer = Buffer.alloc(200);
    read(fd, buffer, 0, buffer.length, 0, (err, count, buff) => {
        console.table(convertCsv(buff.toString()));
    });
});
