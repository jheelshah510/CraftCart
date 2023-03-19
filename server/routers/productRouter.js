const router = require("express").Router();
const { uploadS3 } = require("../middleware/image");

const {
  addProduct,
  deleteProduct,
  modifyProduct,
  getProduct,
  getSingleProduct,
} = require("../controllers/product.controller");

router.post("/add", uploadS3.array("images"), addProduct);
router.get("/:id", getSingleProduct);
router.delete("/delete/:id", deleteProduct);
// router.get("/get", getProduct);

module.exports = router;
