//check jwt
const { jwtToken } = require("../common/jwt");
const jwt = require("jsonwebtoken");

function adminAuth(req, res, next) {
  try {
    const token = req.body.token;
    jwt.verify(token, jwtToken, (err) => {
      if (err) {
        res.status(400).json({ msg: "token is not valid" });
      } else {
        next();
      }
    });
  } catch (err) {
    res.status(400).json({ msg: "token is not valid" });
  }
}

module.exports = adminAuth;
