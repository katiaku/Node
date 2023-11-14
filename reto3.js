const fs = require('fs');
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('Please enter your name: ', (name) => {
    rl.question('Please enter your surname: ', (surname) => {
        rl.question('Please enter your age: ', (age) => {

            const person = {
                name: name,
                surname: surname,
                age: age
            };

            const stringifiedPerson = JSON.stringify(person);

            fs.writeFile('person.json', stringifiedPerson, () => {
                fs.readFile('person.json', { encoding: 'utf8' }, (err, data) => {
                    const parsedData = JSON.parse(data);
                    console.log(parsedData);
                });

                rl.close();
            });
        });
    });
});
