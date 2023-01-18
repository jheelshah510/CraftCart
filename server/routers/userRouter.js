const router = require("express").Router();
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
router.post("/", async (req, res) => {
  try {
    const { username, email, password, passwordVerify } = req.body;
    //validations

    if (!username || !email || !password || !passwordVerify)
      return res
        .status(400)
        .json({ errormsg: "Please fill all required details" });

    if (password.length < 8)
      return res.status(400).json({
        errormsg: "Password length should be of atleast 8 characters",
      });

    if (password != passwordVerify)
      return res.status(400).json({ errormsg: "Password is not matching" });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res
        .status(400)
        .json({ errormsg: "account is already been created with this email" });

    //hash password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    //save new user account to db
    const newUser = new User({
      username,
      email,
      passwordHash,
    });

    const savedUser = await newUser.save();

    //signin user

    const token = jwt.sign(
      {
        user: savedUser._id,
      },
      process.env.JWT_SECRET
    );
    console.log(token);
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
});

module.exports = router;
