//ENVIRONMENT VARIABLES
require("dotenv").config();
const express = require("express");
const app = express();

const {SERVER_PORT} = process.env;
const port = SERVER_PORT || process.env.port;

app.set("port", port);

app.get("/", (req, res) => {
  res.json("Hola mundo!");
});

app.listen(3000, () => {
  console.log("SERVER RUNNING AT PORT 3000");
});
