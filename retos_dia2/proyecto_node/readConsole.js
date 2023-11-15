const readline = require('node:readline');

function question(question) {
    const input = new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(question, (answer) => {
            resolve(answer);
            rl.close();
        });
    });
    return input;
}

async function readConsole(callback) {
    try {
        const name = await question('Please enter your name: ');
        const surname = await question('Please enter your surname: ');
        const age = await question('Please enter your age: ');

        const person = {
            name: name,
            surname: surname,
            age: age
        };

        await callback(person);

    } catch (error) {
        console.log(error);
    }
};

module.exports = { readConsole };
