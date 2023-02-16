const mongoose = require("mongoose");
const imageScehma = new mongoose.Schema({
  name: { type: String, required: true },
  cloudinary_id: { type: String, required: true },
});

const Image = mongoose.model("images", imageScehma);

module.exports = Image;
