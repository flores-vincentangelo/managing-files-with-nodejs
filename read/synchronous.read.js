const { convertCsv } = require('./csv.parse');
const { readFileSync } = require('fs');


module.exports.read = () => {   
    try {
        const data = readFileSync("./data/pulitzer-circulation-data.csv", "utf8");
        console.table(convertCsv(data));
    } catch (error) {
        console.error(`Error with file: ${error}`);
        console.error(error.stack);
    
    }
}
