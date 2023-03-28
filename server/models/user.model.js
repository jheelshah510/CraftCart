const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  passwordHash: { type: String, required: true },
  role: { type: String, default: "buyer", required: true },
  address: { type: String, default: null },
  pincode: { type: Number, default: null },
  phoneNumber: { type: String, default: null },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
