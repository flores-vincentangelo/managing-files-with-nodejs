const fs = require('fs');



module.exports.read = () => {
    let totalSize = 0;
    const fileName = './data/app.log';
    const encoding = "utf8";
    
    fs.stat(fileName, (err, {size}) => totalSize = size);
    
    fs.open(fileName, (err, fd) => {
        const buffer = Buffer.alloc(200);
        for(let i = 0; i <=totalSize/buffer.length; i++) {
            fs.read(fd, buffer, 0, buffer.length, i*buffer.length, (err, count, buff) => {
                console.log(buff.toString());
            });
        }
    });
};


