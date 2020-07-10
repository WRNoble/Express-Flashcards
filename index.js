const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { response, request } = require('express');

const app = express();
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

app.set('view engine', 'pug');//tells Express where to look and to use pug

app.get('/', (request, response) => {
    const name = request.cookies.username
    if (name) {
        response.render('index', { name }); //establish home
    } else {
        response.redirect('/hello');
    }  
});

app.get('/cards', (request, response) => {
    response.render('card', { prompt: "Who dies in 323?" }); //establish a second page and passes in a prompt 
});

app.get('/hello', (request, response) => {
    const name = request.cookies.username;
    if (name) {
        response.redirect('/')
    } else {
        response.render('hello');  
    }
});

app.post('/hello', (request, response) => {
    response.cookie('username', request.body.username);
    response.redirect('/');  
});

app.post('/goodbye', (request, response) => {
    response.clearCookie('username');
    response.redirect('/hello');
})

app.listen(3000, () => {
    console.log("running!");
});