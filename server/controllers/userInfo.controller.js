const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const Seller = require("../models/seller.model");

exports.getUserInfo = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, async (err, info) => {
        if (err) {
          throw err;
        } else {
          const datainfo =
            (await User.findById(info.user)) ||
            (await Seller.findById(info.user));
          if (!datainfo) {
            return res.status(404).send("User not found");
          } else {
            return res.send(datainfo);
          }
        }
      });
    }
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

exports.getBuyerInfo = async (req, res) => {
  try {
    User.findById(req.params.id).exec((error, buyer) => {
      if (error) return res.status(400).json({ error });
      if (buyer) {
        res.status(200).json({ buyer });
      }
    });
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.updateBuyerInfo = async (req, res) => {
  try {
    const userId = req.params.id;
    const { phoneNumber, address, pincode } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User doesn,t exist" });
    }
    user.phoneNumber = phoneNumber;
    user.address = address;
    user.pincode = pincode;

    await user.save();

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
