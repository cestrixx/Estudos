const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Routes
var index = require('./routes/index')
app.use('/', index)
require('./routes/users')(app)
require('./routes/products')(app)

module.exports = app;