const router = require("express").Router();

const { getUserInfo } = require("../controllers/userInfo.controller");
const auth = require("../middleware/auth");

router.post("/", auth, getUserInfo);
module.exports = router;
