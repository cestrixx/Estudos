const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Routes
require('./src/routes/users')(app);
require('./src/routes/products')(app)

module.exports = app;