const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  passwordHash: { type: String, required: true },
  location: { type: String, required: true },
  pincode: { type: Number, required: true },
  imagename: { type: String, required: true },
});

const Seller = mongoose.model("seller", sellerSchema);

module.exports = Seller;
