const Product = require("../models/product.model");
const mongoose = require("mongoose");

exports.addProduct = async (req, res) => {
  try {
    const { productName, description, sellerId, sellerName, quantity } =
      req.body;
    if (!productName || !description || !sellerId || !sellerName || !quantity) {
      return res
        .status(400)
        .json({ errmsg: "Please fill all the required details" });
    }
    const existProduct = await Product.findOne({ productName });
    if (existProduct)
      return res.status(400).json({ errormsg: "Product already exist" });

    const newProduct = new Product({
      _id: new mongoose.Types.ObjectId(),
      productName,
      description,
      sellerId,
      sellerName,
      quantity,
    });

    newProduct.save((error, result) => {
      if (error) return res.status(400).json({ error });
      if (result) {
        return res.status(201).json({
          result: `${req.body.productName} product added succesfully`,
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
};
