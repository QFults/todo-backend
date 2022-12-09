const items = require('express').Router()
const { join } = require('path')
const fs = require('fs')

items.get("/", (req, res) => {
  fs.readFile(join(__dirname, "..", "db", "items.json"), "utf8", (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

items.post("/", (req, res) => {
  fs.readFile(join(__dirname, "..", "db", "items.json"), "utf8", (err, data) => {
    if (err) throw err;
    const items = JSON.parse(data);
    items.push(req.body);

    fs.writeFile(
      join(__dirname, "db", "items.json"),
      JSON.stringify(items),
      (err1) => {
        if (err1) throw err1;
        res.sendStatus(200);
      }
    );
  });
});

module.exports = items
