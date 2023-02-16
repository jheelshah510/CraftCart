const router = require("express").Router();

const {
  addCategory,
  getCategory,
} = require("../controllers/category.controller");
//add category

router.post("/add", addCategory);
router.get("/get", getCategory);

module.exports = router;
