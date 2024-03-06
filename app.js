const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const routes = require("./src/routes/main");
const express = require("express");
const { handleHome } = require("./src/handlers/handleTweet");

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: "false" }));
app.use(bodyParser.json());
app.use(routes);

app.get('/',handleHome)

const port = process.env.PORT || 4000;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});

// module.exports = app;
