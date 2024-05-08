const mongoose = require("mongoose");
const { string } = require("zod");
mongoose.connect(
  "mongodb+srv://shivam:shivam@cluster0.bwgajzb.mongodb.net/cardsDb"
);

const AdminSchema = new mongoose.Schema({
  username: String,
  gmail: String,
  jwt: String,
});

const CardSchema = new mongoose.Schema({
  name: String,
  description: String,
  linkdin: String,
  twitter: String,
  intrest: String,
});

const Admin = mongoose.model("Admin", AdminSchema);
const Card = mongoose.model("Card", CardSchema);

module.exports = { Admin, Card };
