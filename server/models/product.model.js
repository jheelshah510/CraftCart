const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  sellerId: { type: String, required: true },
  productName: { type: String, required: true },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  imageUrl: { type: Array, required: true },
  sellerName: { type: String, required: true },
  isApproved: { type: Boolean, default: false, required: true },
  isPublish: { type: Boolean, default: false, required: true },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
