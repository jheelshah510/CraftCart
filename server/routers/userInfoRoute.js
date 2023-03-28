const router = require("express").Router();

const {
  getUserInfo,
  getBuyerInfo,
  updateBuyerInfo,
} = require("../controllers/userInfo.controller");

router.post("/", getUserInfo);
router.get("/getBuyerInfo/:id", getBuyerInfo);
router.put("/updateInfo/:id", updateBuyerInfo);
module.exports = router;
