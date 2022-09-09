const { createReadStream, createWriteStream, write } = require('fs');

const stream = createReadStream('./data/app.log', {
    highWaterMark: 95,
    encoding: "utf8"
});

const writer = createWriteStream("./data/output.log");

let i = 0;
stream.on('data', data => {
    stream.pause();


    console.log(i++);
    writer.write(data);

    setTimeout(() => {
        stream.resume();
    }, 1000);
});