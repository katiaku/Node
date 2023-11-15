const fs = require('fs/promises');

const person = {
    name: 'John',
    surname: 'Doe',
    age: '35'
};

const stringifiedPerson = JSON.stringify(person);

// then - catch
fs.writeFile('person_then_catch.json', stringifiedPerson)
    .then(() => {
        return fs.readFile('person_then_catch.json', 'utf8');
    })
    .then((data) => {
        const parsedData = JSON.parse(data);
        console.log(parsedData);
    })
    .catch((error) => {
        console.log(error);
    });

// async - await
async function writeAndRead() {
    try {
        await fs.writeFile('person_async_await.json', stringifiedPerson);
        const data = await fs.readFile('person_async_await.json', 'utf8');
        const parsedData = JSON.parse(data);
        console.log(parsedData);
    } catch (error) {
        console.log(error);
    }
}

writeAndRead();
