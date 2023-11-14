const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

function readConsole(callback) {
    rl.question('Please enter your name: ', (name) => {
        rl.question('Please enter your surname: ', (surname) => {
            rl.question('Please enter your age: ', (age) => {
    
                const person = {
                    name: name,
                    surname: surname,
                    age: age
                };
    
                callback(person);
                rl.close();
    
            });
        });
    });
};

module.exports = { readConsole };
