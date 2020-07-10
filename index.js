const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { response, request } = require('express');

const app = express();
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

app.set('view engine', 'pug');//tells Express where to look and to use pug


const mainRoutes = require('./routes/routes');
const cardRoutes = require('./routes/cards');

app.use(mainRoutes);
app.use('/cards', cardRoutes);

app.use((req, res, next) => {
    console.log("hello");
    // const err = new Error('Oh no!');
    // err.status = 500;
    next();
});

app.use((req, res, next) => {
    console.log("World");
    next();
});

app.use((request, response, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, request, response, next) => {
    response.locals.error = err;
    response.status(err.status);
    response.render('error', err);
    next();
});

app.listen(3000, () => {
    console.log("running!");
});