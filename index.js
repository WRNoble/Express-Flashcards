const express = require('express');

const app = express();



app.set('view engine', 'pug');//tells Express where to look and to use pug

app.get('/', (request, response) => {
    response.render('index'); //establish home 
});

app.get('/cards', (request, response) => {
    response.render('card', { prompt: "Who dies in 323?" }); //establish a second page 
});

app.get('/hello', (request, response) => {
    response.render('hello');  
});

app.post('/hello', (request, response) => {
    response.render('hello');  
});

app.listen(3000, () => {
    console.log("running!");
});