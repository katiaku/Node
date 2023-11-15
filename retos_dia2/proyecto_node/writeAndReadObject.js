const fs = require('fs/promises');

async function writeAndRead(path, obj) {
    try {
        const stringifiedObj = JSON.stringify(obj);
        await fs.writeFile(path, stringifiedObj);
        const data = await fs.readFile(path, 'utf8');
        const parsedData = JSON.parse(data);
        console.log(parsedData);
    } catch (error) {
        console.log(error);
    }
}

module.exports = { writeAndRead };
