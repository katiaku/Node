const fs = require('fs/promises');
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

async function consoleInputWriteRead() {
    try {
        const name = await question('Please enter your name: ');
        const surname = await question('Please enter your surname: ');
        const age = await question('Please enter your age: ');

        const person = {
            name: name,
            surname: surname,
            age: age
        };

        const stringifiedPerson = JSON.stringify(person);
        await fs.writeFile('person_async_await.json', stringifiedPerson);
        const data = await fs.readFile('person_async_await.json', 'utf8');
        const parsedData = JSON.parse(data);
        console.log(parsedData);

    } catch (error) {
        console.log(error);
    }
}

consoleInputWriteRead();
