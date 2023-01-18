const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());
mongoose.set("strictQuery", false);
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) return console.log(err);
    console.log("Connected to mongo");
  }
);
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log("server started");
});

app.use("/auth", require("./routers/userRouter"));
