const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  passwordHash: { type: String, required: true },
  role: { type: String, default: "buyer", required: true },
  address: { type: String, required: true, default: " " },
  pincode: { type: Number, required: true, default: " " },
  phoneNumber: { type: String, required: true, default: " " },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
