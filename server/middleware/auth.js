const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  try {
    const token = req.cookie.token;
    if (!token)
      return res.status(401).json({
        errorMsg: "Unauthorized",
      });

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified.user;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({
      errorMsg: "Unauthorized",
    });
  }
}

module.exports = router;
