require("dotenv").config();
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

function auth(req, res, next) {
  const token = req.headers.token;
  const verifyToken = jwt.verify(token, JWT_SECRET);
  if (verifyToken) {
    req.userId = verifyToken.id;
    next();
  } else {
    res.status(403).json({
      msg: "Unauthoized",
    });
  }
}
module.exports = {
  auth,
};
