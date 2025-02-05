const { createReadStream } = require('fs');

const file = './data/app.log';
const stream = createReadStream(file, {
    highWaterMark: 9550,
    encoding: "utf8"
});

stream.on('data', data => {
    stream.pause();
    console.log(data);

    setTimeout(() => {
        stream.resume();
    }, 2000);
});