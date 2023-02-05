const router = require("express").Router();
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//register

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

    //signin token
    res.status(200).json({ msg: "account created successfully" });
    const token = jwt.sign(
      {
        user: savedUser._id,
      },
      process.env.JWT_SECRET
    );
    //send the token in http-cookie

    res
      .cookie("token", token, {
        httpOnly: true,
      })
      .send();
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
});

//login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    //validate
    if (!email || !password)
      return res.status(400).json({ errormsg: "Enter required credentials" });

    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(401).json({ errormsg: "Wrong username or password" });

    const passwordCorrect = await bcrypt.compare(
      password,
      existingUser.passwordHash
    );
    if (!passwordCorrect)
      return res.status(401).json({ errormsg: "Wrong username or password" });

    res.status(200).json({ msg: "Sigin successull" });
    //signin token

    const token = jwt.sign(
      {
        user: existingUser._id,
      },
      process.env.JWT_SECRET
    );
    //send the token in http-cookie

    res
      .cookie("token", token, {
        httpOnly: true,
      })
      .send();
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
});
//logout
router.get("/logout", (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
    })
    .send();
});
//check loggedIn

router.get("/loggedIn", (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json(false);

    jwt.verify(token, process.env.JWT_SECRET);

    res.send(true);
  } catch (err) {
    console.log(err);
    res.json(false);
  }
});

module.exports = router;
