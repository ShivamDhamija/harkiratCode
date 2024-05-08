//chek payload that it should have all field and update only than
const z = require("zod");
const name = z.string();
const description = z.string();
const linkdin = z.string().url();
const twitter = z.string().url();
const intrest = z.string();

function cardPayloadValid(req, res, next) {
  try {
    const body_val = req.body.values;
    const name_val = body_val.name;
    const description_val = body_val.description;
    const linkdin_val = body_val.linkdin;
    const twitter_val = body_val.twitter;
    const intrest_val = body_val.intrest;
    name.parse(name_val);
    description.parse(description_val);
    linkdin.parse(linkdin_val);
    twitter.parse(twitter_val);
    intrest.parse(intrest_val);
    next();
  } catch (err) {
    res.status(400).json({ msg: "card data is not valid" });
  }
}

module.exports = cardPayloadValid;
