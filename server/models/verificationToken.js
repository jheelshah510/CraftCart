const mongoose = require("mongoose");

const verificationTokenSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref,
  },
});

const User = mongoose.model("user", verificationTokenSchema);

module.exports = User;
