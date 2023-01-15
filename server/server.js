const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const MONGO_URL = `mongodb+srv://${process.env.DB_name}:${process.env.DB_password}@cluster0.3k5m4vd.mongodb.net/?retryWrites=true&w=majority`;
console.log(MONGO_URL);
const PORT = 3000;

app.listen(PORT, () => {
  console.log("listening");
});
