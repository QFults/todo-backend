const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post('/api/items', (req, res) => {
  console.log(req.body)
  res.sendStatus(200)
})

app.listen(3001)
