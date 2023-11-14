const fs = require('fs');

function writeAndRead(path, obj) {
    const stringifiedObj = JSON.stringify(obj);

    fs.writeFile(path, stringifiedObj, () => {
        fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
            const parsedData = JSON.parse(data);
            console.log(parsedData);
        });
    });
}

module.exports = { writeAndRead };
