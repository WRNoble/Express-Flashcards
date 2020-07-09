const express = require('express');

const app = express();

app.set('view engine', 'pug');//tells Express where to look and to use pug

app.get('/', (request, response) => {
    response.send('<h1>Hello There</h1>'); //establish home 
});

app.get('/hello', (request, response) => {
    response.send('<h1>General Kenobi</h1>'); //establish a second page 
});

app.listen(3000, () => {
    console.log("running!");
});