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
