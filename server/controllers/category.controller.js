const Category = require("../models/category.model");
const mongoose = require("mongoose");

exports.addCategory = async (req, res) => {
  try {
    const { categoryName } = req.body;

    if (!categoryName)
      return res
        .status(400)
        .json({ errormsg: "Please fill all required details" });

    const existCategory = await Category.findOne({ categoryName });
    if (existCategory)
      return res.status(400).json({ errormsg: "Category already exist" });

    const newCategory = new Category({
      _id: new mongoose.Types.ObjectId(),
      cid,
      categoryName,
    });
    newCategory.save((error, result) => {
      if (error) return res.status(400).json({ error });
      if (result) {
        return res.status(201).json({
          result: `${req.body.categoryName} category added succesfully`,
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

exports.getCategory = async (req, res) => {
  Category.find({}).exec((error, category) => {
    if (error) return res.status(400).json({ error });
    if (category) {
      res.status(200).json({ category });
    }
  });
};
