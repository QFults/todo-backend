const express = require('express')
const fs = require('fs')
const { join } = require('path')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))

app.get('/api/items', (req, res) => {
  fs.readFile(join(__dirname, 'db', 'items.json'), 'utf8', (err, data) => {
    if (err) throw err
    res.json(JSON.parse(data))
  })
})

app.post('/api/items', (req, res) => {
  fs.readFile(join(__dirname, "db", "items.json"), "utf8", (err, data) => {
    if (err) throw err;
    const items = JSON.parse(data)
    items.push(req.body)

    fs.writeFile(join(__dirname, "db", "items.json"), JSON.stringify(items), err1 => {
      if (err1) throw err1
      res.sendStatus(200)
    });
  });
})

app.listen(3001)
