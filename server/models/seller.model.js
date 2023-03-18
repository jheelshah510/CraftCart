const mongoose = require("mongoose");
// const Category = require("./category.model");

const sellerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  passwordHash: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  pincode: { type: Number, required: true },
  imageUrl: { type: Array, required: true },
  selectedOptions: { type: Array, required: true },
  role: { type: String, default: "seller", required: true },
});

const Seller = mongoose.model("seller", sellerSchema);

module.exports = Seller;
