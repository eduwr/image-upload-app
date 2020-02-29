const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(routes);

app.listen(3333);

/*
***Continua***

url: https://www.youtube.com/watch?v=MkkbUfcZUZM&t=42s

21:07 min
*/
