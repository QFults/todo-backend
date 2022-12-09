const express = require("express");
const fs = require("fs");
const { join } = require("path");
const api = require("./routes");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", api);

app.use(express.static("public"));

app.listen(3001);
