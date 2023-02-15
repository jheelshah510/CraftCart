const router = require("express").Router();
const Seller = require("../models/seller.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//register

router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      passwordVerify,
      address,
      pincode,
      // category,
    } = req.body;
    //validations

    if (!name || !email || !password || !passwordVerify || !address || !pincode)
      return res
        .status(400)
        .json({ errormsg: "Please fill all required details" });

    if (password.length < 8)
      return res.status(400).json({
        errormsg: "Password length should be of atleast 8 characters",
      });

    if (password != passwordVerify)
      return res.status(400).json({ errormsg: "Password is not matching" });

    if (pincode.length != 6)
      return res.status(400).json({ errormsg: "Pincode must of 6 digits" });

    const existingSeller = await Seller.findOne({ email });
    if (existingSeller)
      return res
        .status(400)
        .json({ errormsg: "account is already been created with this email" });

    //hash password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    //save new user account to db
    const newSeller = new Seller({
      name,
      email,
      passwordHash,
      address,
      pincode,
      // category,
    });

    const savedSeller = await newSeller.save();

    //signin token

    const token = jwt.sign(
      {
        user: savedSeller._id,
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

    const existingSeller = await Seller.findOne({ email });
    if (!existingSeller)
      return res.status(401).json({ errormsg: "Wrong name or password" });

    const passwordCorrect = await bcrypt.compare(
      password,
      existingSeller.passwordHash
    );
    if (!passwordCorrect)
      return res.status(401).json({ errormsg: "Wrong name or password" });

    //signin token

    const token = jwt.sign(
      {
        user: existingSeller._id,
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
