const tweetRouter = require("./tweets.routes");
const express = require("express");
const app = express();

// Mount routes to respective base URLs
app.use("/tweet", tweetRouter);

module.exports = app;
