const { Router } = require("express");
const { Card } = require("../db/index");
const router = Router();

router.get("/", async (req, res) => {
  //call to mongoos and return it as a response in array as it is
  try {
    //console.log("get call was made");
    const cards = await Card.find({});
    res.json({ cards: cards });
  } catch (err) {
    res.status(400).json({ msg: "error came while loading Cards from DB" });
  }
});
module.exports = router;
