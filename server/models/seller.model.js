const mongoose = require("mongoose");

// const imageSchema = new mongoose.Schema({});

const sellerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  passwordHash: { type: String, required: true },
  location: { type: String, required: true },
  pincode: { type: Number, required: true },
  // imageScehma: imageSchema,
});

const Seller = mongoose.model("seller", sellerSchema);

module.exports = Seller;
