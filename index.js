'use strict';

const express  = require('express');
const app = express();

app.set('case sensitive routing', true);
app.use(require('method-override')());
app.use(require(__dirname + '/back-end/config/router')(express.Router()));

app.listen(8000);
console.log('App is listening to port 8000');