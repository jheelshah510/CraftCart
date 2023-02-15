const router = require("express").Router();
const Category = require("../models/category.model");
const mongoose = require("mongoose");
//add category

router.post("/add", async (req, res) => {
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
      categoryName,
    });
    newCategory.save((error, result) => {
      res.json({
        result: `${req.body.categoryName} category added succesfully`,
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});

module.exports = router;
