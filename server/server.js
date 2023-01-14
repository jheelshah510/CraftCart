const express = require("express");
const mongoose = require("mongoose");

const app = express();

const MONGO_URL =
  "mongodb+srv://jheelshah510:20cs082@charusat.edu.in@cluster0.3k5m4vd.mongodb.net/?retryWrites=true&w=majority";

const PORT = 3000;

app.listen(PORT, () => {
  console.log("listening");
});
