const router = require("express").Router();

const {
  getUserInfo,
  getBuyerInfo,
} = require("../controllers/userInfo.controller");

router.post("/", getUserInfo);
router.get("/getBuyerInfo/:id", getBuyerInfo);
module.exports = router;
