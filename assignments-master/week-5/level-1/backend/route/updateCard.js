const { Router } = require("express");
const router = Router();
const adminAuth = require("../middlewear/adminAuth");
const { Card } = require("../db/index");
const cardPayloadValid = require("../middlewear/cardpayloadCheck");
router.post("/", adminAuth, cardPayloadValid, async (req, res) => {
  //call mogoss and update
  try {
    const id = req.body.id;
    const body_val = req.body.values;
    const name = body_val.name;
    const description = body_val.description;
    const linkdin = body_val.linkdin;
    const twitter = body_val.twitter;
    const intrest = body_val.intrest;
    const body = { name, description, linkdin, twitter, intrest };
    await Card.updateOne({ _id: id }, body);
    res.json({ msg: "data updates successfully" });
  } catch (err) {
    res.status(400).json({ msg: "error came while updating data" });
    console.log(err);
  }
});
module.exports = router;
