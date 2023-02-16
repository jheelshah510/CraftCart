const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(express.json());
app.use(cookieParser());
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
  console.log(`server started at ${PORT}`);
});
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use("/auth", require("./routers/userRouter"));
app.use("/sellauth", require("./routers/sellerRoute"));
app.use("/category", require("./routers/categoryRouter"));
