const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  cid: { type: Number, required: true },
  categoryName: { type: String, required: true },
});

const Category = mongoose.model("category", categorySchema);

module.exports = Category;
