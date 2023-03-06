const router = require("express").Router();

const {
  createSeller,
  loginSeller,
  logoutSeller,
  checkLoginSeller,
} = require("../controllers/seller.controller");
const { uploadS3 } = require("../middleware/image");

//register
router.post("/", uploadS3.array("images"), createSeller);

//login
router.post("/login", loginSeller);

//logout
router.get("/logout", logoutSeller);

//check loggedIn
router.get("/loggedIn", checkLoginSeller);

module.exports = router;
