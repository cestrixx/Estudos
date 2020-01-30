const express = require('express');
const app = express();
const consign = require('consign');

consign({ cwd: 'src', verbose: false })
    .include('./config/middlewares.js')
    .then('./models')
    .then('./controllers')
    .then('./routes')
    .into(app);

// Routes
var index = require('./routes/index');
app.use('/', index);

module.exports = app;