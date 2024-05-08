//check payload for admin sigin that it should follow some rules
const z = require("zod");

const username = z.string().min(6);
const email = z.string().email();

function adminLogin(req, res, next) {
  try {
    const body = req.body;
    const name = body.username;
    const gmail = body.gmail;
    username.parse(name);
    email.parse(gmail);
    next();
  } catch (err) {
    return res
      .status(400)
      .json({ msg: "you are not following constrains properly" });
  }
}

module.exports = adminLogin;
