const express = require('express')

const items = require('./items.js')

const app = express()

app.use('/items', items)

module.exports = app
