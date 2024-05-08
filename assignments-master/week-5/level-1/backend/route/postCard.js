const { Router } = require("express");
const router = Router();
const adminAuth = require("../middlewear/adminAuth");
const { Card } = require("../db/index");
const cardPayloadValid = require("../middlewear/cardpayloadCheck");
router.post("/", adminAuth, cardPayloadValid, async (req, res) => {
  //call mongo and add
  try {
    const body_val = req.body.values;
    const name = body_val.name;
    const description = body_val.description;
    const linkdin = body_val.linkdin;
    const twitter = body_val.twitter;
    const intrest = body_val.intrest;
    const created = await Card.create({
      name,
      description,
      linkdin,
      twitter,
      intrest,
    });
    res.json({ msg: "data added in DB", id: created._id });
  } catch (err) {
    console.log(err);
    res.status(400).json({ msg: "error came while saving data in DB" });
  }
});
module.exports = router;
