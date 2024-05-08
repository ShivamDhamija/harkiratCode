const { Router } = require("express");
const router = Router();
const { jwtToken } = require("../common/jwt");
const JWT = require("jsonwebtoken");
const { Admin } = require("../db/index");
const adminCheck = require("../middlewear/adminCheck");

router.post("/", adminCheck, async (req, res) => {
  //use middlewear that check is user has follow some standords ,
  //login user and return jwt token and id user already exist return already existing jwt only.
  try {
    const username = req.body.username;
    const gmail = req.body.gmail;
    const jwt = JWT.sign({ username, gmail }, jwtToken);
    const user = await Admin.create({ username, gmail, jwt });
    res.json({ msg: "user added successfully", id: user._id, jwt });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      msg: "error occure while storing credentials at DB",
    });
  }
});
module.exports = router;
