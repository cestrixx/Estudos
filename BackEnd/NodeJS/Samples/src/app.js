const express = require('express');
const app = express();
const consign = require('consign');

consign({ cwd: 'src', verbose: false })
    .include('./config/middlewares.js')
    .into(app);

// Routes
var index = require('./routes/index')
app.use('/', index)
require('./routes/users')(app)
require('./routes/products')(app)

module.exports = app;