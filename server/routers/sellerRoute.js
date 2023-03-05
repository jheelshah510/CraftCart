const router = require("express").Router();
const Seller = require("../models/seller.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { cloudinary } = require("../utility/cloudinary");
const upload = require("../utility/multer");
const fs = require("fs");
//register

router.post("/", upload.array("image"), async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      passwordVerify,
      phoneNumber,
      address,
      pincode,
      selectedOptions,
    } = req.body;
    // const images = req.body.images;

    // const uploadedImages = [];

    // for (const image of images) {
    //   const result = await cloudinary.uploader.upload(image.path);
    //   console.log(result);
    //   uploadedImages.push(result.secure_url);
    // }

    // console.log(images);
    //validations
    // let images = [...req.body.images];
    // console.log(images);
    // let imagesBuffer = [];

    // for (let i = 0; i < images.length; i++) {
    //   const result = await cloudinary.uploader.upload(images[i], {
    //     folder: "id_proof",
    //     width: 1920,
    //     crop: "scale",
    //   });

    // imagesBuffer.push({
    //   public_id: result.public_id,
    //   url: result.secure_url,
    // });
    // }

    // req.body.images = imagesBuffer;
    // console.log(imagesBuffer);
    if (
      !name ||
      !email ||
      !password ||
      !passwordVerify ||
      !phoneNumber ||
      !address ||
      !pincode ||
      !selectedOptions
      // ||
      // !images
    )
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

    //image

    // const result = await cloudinary.uploader.upload(images, {
    //   folder: "id_proof",
    //   width:300,
    //   crop:"scale"
    // });
    //save new user account to db
    const newSeller = new Seller({
      name,
      email,
      passwordHash,
      phoneNumber,
      address,
      pincode,
      // images: [
      //   {
      //     public_id: result.public_id,
      //     url: result.secure_url,
      //   },
      // ],
      selectedOptions,
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
