const fs = require('fs');

const person = {
    name: 'John',
    surname: 'Doe',
    age: '35'
};

const stringifiedPerson = JSON.stringify(person);

fs.writeFile('person.json', stringifiedPerson, () => {
    fs.readFile('person.json', { encoding: 'utf8' }, (err, data) => {
        const parsedData = JSON.parse(data);
        console.log(parsedData);
    });
});

