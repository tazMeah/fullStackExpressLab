"use strict";
const express = require("express");
const app = express();
const commands = require("./routes/commands");
// const results = require("./routes/results");

app.use(express.json());
app.use(express.static("./public"));
app.use("/", commands);
// app.use("/", results);

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});