const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const getCardsRoute = require("./route/getCards");
const postCardRoute = require("./route/postCard");
const updateCardRoute = require("./route/updateCard");
const signinAdmin = require("./route/signinAdmin");

app.use(bodyParser.json());
app.use(cors());
app.use("/getCards", getCardsRoute);
app.use("/postCard", postCardRoute);
app.use("/updateCard", updateCardRoute);
app.use("/signin", signinAdmin);
app.listen(3000, () => console.log("listening at 3000 port"));
