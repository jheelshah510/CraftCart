const mongoose = require("mongoose");
const imageScehma = new mongoose.Schema({
  public_id: { type: String, required: true },
  url: { type: String, required: true },
});

const Image = mongoose.model("images", imageScehma);

module.exports = Image;
