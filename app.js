"use strict";
const express = require("express");

const app = express();
const PORT = 3000;
let ticket = 0;
const displayList = {};

//var bodyParser = require('body-parser')
app.use(express.urlencoded({ extended: true }));

app.get("/next", (req, res) => {
  //http://localhost:3000/next?tent=tent5
  const tent = req.query.tent;
  ticketIncrement();
  displayList[ticket] = tent;
  res.send(JSON.stringify({ ticket }));
});

app.get("/display", (req, res) => {
  res.send(JSON.stringify(displayList));
});

app.get("/present", (req, res) => {
  const ticket = req.query.ticket;
  delete displayList[ticket];
  res.status(200).send("OK");
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

const ticketIncrement = () => (ticket == 999 ? (ticket = 1) : ticket++);
