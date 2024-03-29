const router = require("express").Router();
const { uploadS3 } = require("../middleware/image");

const {
  addProduct,
  deleteProduct,
  modifyProduct,
  getSingleProduct,
  getAllSellerProducts,
  getAllProducts,
  getHomeProducts,
  getProductByCat,

  find,
} = require("../controllers/product.controller");

router.get("/getAllProducts", getAllProducts);
router.get("/getHomeProducts", getHomeProducts);
router.get("/find", find);
router.post("/add", uploadS3.array("images"), addProduct);
router.get("/getProductByCat/:catname", getProductByCat);
router.get("/:id", getSingleProduct);
router.delete("/delete/:id", deleteProduct);
router.get("/seller/:sellerId/products", getAllSellerProducts);
router.put("/edit/:sellerId/:id", uploadS3.array("images"), modifyProduct);
// router.get("/get", getProduct);

module.exports = router;
