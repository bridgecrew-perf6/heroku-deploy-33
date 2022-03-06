require('dotenv').config();
const express = require("express");
const app = express();

app.get("/test", (_req, res) =>  {
  res.status(200).send(process.env.key);
})
module.exports = app;