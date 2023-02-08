const mongoose = require("mongoose");

// const imageSchema = new mongoose.Schema({});

const sellerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  passwordHash: { type: String, required: true },
  address: { type: String, required: true },
  pincode: { type: Number, required: true },
  isSeller: { type: Boolean, default: true, required: true },
  isAdmin: { type: Boolean, default: false, required: true },
  // category: {
  //   type: [
  //     {
  //       type: String,
  //       required: true,
  //     },
  //   ],
  // },
  // imageScehma: imageSchema,
});

const Seller = mongoose.model("seller", sellerSchema);

module.exports = Seller;
