const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Petición recibida del cliente');
    console.log('Request URL:' + req.url);
    console.log('Request Method:' + req.method);
    console.log('Request User-Agent:' + req.headers['user-agent']);
    res.status(200).json({ ok: true, message: 'Recibido!'});
});

app.get('/bye', (req, res) => {
    console.log('Petición recibida del cliente');
    console.log('Request URL:' + req.url);
    console.log('Request Method:' + req.method);
    console.log('Request User-Agent:' + req.headers['user-agent']);
    res.status(200).json({ ok: true, message: 'Adios!'});
});

app.listen(3000);
