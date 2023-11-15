const writeAndReadObject = require('./writeAndReadObject');
const readConsole = require('./readConsole');

writeAndReadObject.writeAndRead('person.json', {
    name: 'John',
    surname: 'Doe',
    age: '35'
});

readConsole.readConsole((person) => {
    writeAndReadObject.writeAndRead('person2.json', person);
});
