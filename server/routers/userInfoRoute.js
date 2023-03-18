const router = require("express").Router();

const { getUserInfo } = require("../controllers/userInfo.controller");

router.post("/", getUserInfo);
module.exports = router;
