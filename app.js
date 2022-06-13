'use strict'

const express = require('express');
const app = express();

//set config app
app.locals.pretty = true;
app.set('view engine', 'pug');


//Routers
const index = require('./routers/index.js');
app.use('/', index);

module.exports = () => {
    return app;
}


