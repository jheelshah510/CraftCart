const router = require("express").Router();

const {
  addProduct,
  deleteProduct,
  modifyProduct,
  getProduct,
} = require("../controllers/product.controller");

router.post("/add", addProduct);
// router.get("/get", getProduct);

module.exports = router;
