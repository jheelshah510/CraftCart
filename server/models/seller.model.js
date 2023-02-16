const mongoose = require("mongoose");
// const Category = require("./category.model");

const sellerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  passwordHash: { type: String, required: true },
  address: { type: String, required: true },
  pincode: { type: Number, required: true },

  // category: {
  //       type: String,
  //       required: true,

  // },
  image: [
    {
      public_id: { type: String, required: true },
      url: { type: String, required: true },
    },
  ],
  isSeller: { type: Boolean, default: true, required: true },
  isAdmin: { type: Boolean, default: false, required: true },
});

const Seller = mongoose.model("seller", sellerSchema);

module.exports = Seller;
