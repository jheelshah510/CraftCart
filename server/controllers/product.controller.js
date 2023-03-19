const Product = require("../models/product.model");
const mongoose = require("mongoose");

exports.addProduct = async (req, res) => {
  try {
    const {
      productName,
      description,
      sellerId,
      quantity,
      selectedOptions,
      sellerName,
      price,
    } = req.body;

    const imageUrl = req.files.map((file) => file.location);
    console.log(imageUrl);
    if (
      !productName ||
      !description ||
      !sellerId ||
      !quantity ||
      !imageUrl ||
      !selectedOptions ||
      !sellerName ||
      !price
    ) {
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
      imageUrl,
      selectedOptions,
      price,
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

exports.getSingleProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    await Product.findById(productId, function (err, result) {
      if (err) throw err;

      res.send(result);
    });
  } catch (error) {}
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }
    const { sellerId } = req.body;
    if (Product.sellerId !== sellerId) {
      return res.status(401).json({ msg: "User not authorized" });
    }
    await Product.remove();

    res.json({ msg: "Product removed" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

exports.getAllSellerProducts = (req, res) => {
  try {
    const sellerId = req.params.sellerId;

    Product.find({ sellerId: sellerId }).exec((err, results) => {
      if (err) throw err;
      res.send(results);
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};
