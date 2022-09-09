const { closeSync, openSync, readdirSync, writeSync } = require('fs');
const camelcase = require('camelCase');

const indexFd = openSync('./index.js', 'w');

const files = readdirSync('./read');

files.map(f => {
    const name = f.replace("js", "");
    console.log(`Adding a file: ${f}`);

    writeSync(indexFd,
        `module.exports.${camelcase(name)} = require('./read/${name}').read;\n`);
});

closeSync(indexFd);