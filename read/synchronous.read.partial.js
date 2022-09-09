const fs = require('fs');


module.exports.read = () => {
    const fileName = "./data/app.log";
    
    const fd = fs.openSync(fileName);
    
    let count = 0;
    
    do {
        const buffer = Buffer.alloc(200);
        
        count = fs.readSync(fd, buffer, 0, buffer.length, null);
        
        console.log(buffer.toString());
    
    } while(count > 0)
};


