const router = require("express").Router();
const { uploadS3 } = require("../middleware/image");

const {
  addProduct,
  deleteProduct,
  modifyProduct,
  getProduct,
} = require("../controllers/product.controller");

router.post("/add", uploadS3.array("images"), addProduct);
// router.get("/get", getProduct);

module.exports = router;
