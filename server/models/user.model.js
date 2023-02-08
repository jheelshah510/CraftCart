const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  passwordHash: { type: String, required: true },
  isSeller: { type: Boolean, default: false, required: true },
  isAdmin: { type: Boolean, default: false, required: true },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
