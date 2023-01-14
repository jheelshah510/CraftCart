const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.send("homepage");
});

app.listen(3030, () => {
  console.log("listening");
});
