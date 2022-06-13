'use strict'

const app = require('./app.js')();

const PUERTO =  process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log("Star server at port " + PUERTO);
});


